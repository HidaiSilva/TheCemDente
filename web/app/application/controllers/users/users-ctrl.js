define(['sgp'], function (app) {
	app.controller('UsersCtrl', ['$scope', 'CrudService', '$httpParamSerializer', '$location', '$translate'
		, function ($scope, CrudService, $httpParamSerializer, $location, $translate) {
			
			//Begin Filter ----------------------------------------------------------------------------------------
			
			//Armazena os filtros aplicados + paginação.
			$scope.filterData = {};
			
			//Filtro selecionado pelo usuário no combo.
	        $scope.filterSelected = undefined;
	        
	        //Filtros existentes na tela serão carregados no combo.
			$scope.filterSelectedItems = [{ "name": "FILTER", "type": "null", "show": "0" },
				{ "name": "NAME", "type": "text", "show": "1" },
				{
					"name": "ROLE", "type": "select", "show": "1", "options":
						[{"name": "ADMIN", "value": "ADMIN"}, 
						{ "name": "USER", "value": "USER" }]
				}, 
				{ "name": "MAIL", "type": "text", "show": "1" }, 
				{
					"name": "STATUS", "type": "select", "show": "1", "options":
						[{ "name": "ATIVO", "value": "A" }, { "name": "INATIVO", "value": "I" }]
			}];

	        //Filtros aplicados.
	        $scope.filterApplyed = [];

	        //Show or hide item of list items filter
	        setAttrShowFilterItem = function(_name, _show){
	    	    angular.forEach($scope.filterSelectedItems,function(value, key){
	    	        if(value.name == _name){
	    	        	value.show = _show;
	                }
	    	    });
	        }

	        //Filter item selected
	        $scope.setFilterSelected = function(value){
	            $scope.filterSelected = value;
	            setTimeout(function () {
	                $(".filter-search").find(".form-control").focus();
	            }, 100);
	        }

	        //Filter item selected value (When type selected equals 'text')
	        $scope.filterSelectedValue = undefined;
	        //Filter item selected value (When type selected equals 'select')
	        $scope.filterSelectedSelectValue = undefined;

	        //
	        addFilterApplyed = function(filter, valueText, valueSelect){
	    		switch(filter.type) {
	    		case "text":
	    			if(!(valueText == undefined || valueText == "")){
	    				$scope.filterApplyed.push({"name":filter.name,"value":valueText});
	    			}
	    			break;
	            case 'select':
	            	if(!(valueSelect == undefined || valueSelect == "")){
	            		$scope.filterApplyed.push({"name":filter.name,"value":valueSelect});
	            	}
	    			break;
	    		}
	        }

	        //
	        preApplyFilter = function(){
	        	emptyFilterValue = ($scope.filterSelectedValue == undefined || $scope.filterSelectedValue.trim() == '')
	    				&& ($scope.filterSelectedSelectValue == undefined  || $scope.filterSelectedSelectValue.trim() == '');

		    	return !(emptyFilterValue);
	        }

	        //
	        $scope.applyFilter = function(){

	        	if(!preApplyFilter()){
	        		return;
	        	}

	        	switch($scope.filterSelected.name) {
	            case 'NAME':
	            	$scope.filterData.userName=$scope.filterSelectedValue;
	                break;
	            case 'ROLE':
	            	$scope.filterData.role=$scope.filterSelectedSelectValue;
	                break;
	            case 'MAIL':
	            	$scope.filterData.email=$scope.filterSelectedValue;
	                break;
	            case 'STATUS':
	            	$scope.filterData.status=$scope.filterSelectedSelectValue;
	                break;
	            default:
	            break;
	        	}

	        	addFilterApplyed($scope.filterSelected, $scope.filterSelectedValue, $scope.filterSelectedSelectValue);
	        	$scope.load();

	            setAttrShowFilterItem($scope.filterSelected.name, 0);
	            $scope.filterSelectedValue = "";
	            $scope.setFilterSelected($scope.filterSelectedItems[0]);
	        }

	        $scope.applyCleanItemFilter = function(){
	        	switch($scope.filterSelected.name) {
	            case 'NAME':
	            	$scope.filterData.userName=undefined;
	                break;
	            case 'ROLE':
	            	$scope.filterData.role=undefined;
	            break;
	            case 'MAIL':
	            	$scope.filterData.email=undefined;
	                break;
	            case 'STATUS':
	            	$scope.filterData.status=undefined;
	            break;
	            default:
	            break;
	        	}
	        	$scope.load();
	        	
	            $scope.filterSelectedValue = "";
	            setAttrShowFilterItem($scope.filterSelected.name, 1);
	            $scope.setFilterSelected($scope.filterSelectedItems[0]);
	        }
	        $scope.deleteFilterItem = function(index){
	    		if($scope.filterApplyed.length > 0) {
	                $scope.filterSelected = $scope.filterApplyed[index];
	                $scope.applyCleanItemFilter();
	    			$scope.filterApplyed.splice(index, 1);
	    		}
	        }
	    	//End Filter ----------------------------------------------------------------------------------------
	        
	    	//Load projects
	    	$scope.load = function(){
				//Filter Data
	            $scope.filterData.page = ($scope.currentPage) - 1;
	            $scope.filterData.count = $scope.itemsPerPage;
	            $scope.filterData.order= $scope.sortDirectionAsc ? 'ASC' : 'DESC';
	            $scope.filterData.sort = $scope.sortColumn ? $scope.sortColumn : 'usrName' ;

	            CrudService.user.findAll($.param($scope.filterData))
	    		.then(function(response){
//	    			console.log(response.data.content);
	    			$scope.users = response.data.content;
	                $scope.totalItems = response.data.totalElements;
	        	})
	        	.catch(function (error) {
	                $scope.error(error.message);
	        	});
	    	}
	    	
			$scope.name = "usuarios";
			
			$scope.edit = function(id){
				$location.path("register").search({id: id});
			}
			
			$scope.delete = function(id){
				CrudService.user.delete(id)
				.then(function(){
					$scope.load();
				})
				.catch();
			}

			$scope.user = {
				status: "A"
			};
	
			$scope.load();
			
			$scope.propertyName = 'id';
			$scope.reverse = true;
			
			var attrs = ['id', 'userName', 'usr_role', 'email', 'sts'];
//			console.log(attrs);
			
			$scope.sortBy = function(propertyName) {
				$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
				$scope.propertyName = propertyName;
			};
						
			$scope.filter = function(){
				$scope.users = _.filter($scope.allUsers, function(u){
					return $scope.anyAttrContains(u, attrs, $scope.filterText);
				});
			};
      
      $scope.statusTranslate = function(status){
        if ( status == 'Active' || status == 'A'){
          return $translate.instant('user.active.vTrue');
        }else{
          return $translate.instant('user.active.vFalse');
        }
      };
	}]);
});