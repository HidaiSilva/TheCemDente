(function () {
	angular
		.module('sgp')
        .directive('filter', filter);
	
	function filter($translate) {
    	return {
            restrict : "EA",
            templateUrl : 'application/views/templates/filter.html',
            scope : {
                pagecontroller : '@',
                pagetranslator: '@'
            },
            controller: function($scope){
        		
            	$scope.filterData = {};
        		$scope.filterSelected = undefined;
        		$scope.filterApplyed = [];
                
                //Show or hide item of list items filter
                var setAttrShowFilterItem = function(_name, _show){
            	    angular.forEach($scope.filterController.filterSelectedItems,function(value, key){
            	        if(value.name == _name){
            	        	value.show = _show;
                        }
            	    });
                }
                
                //Filter item selected
                $scope.setFilterSelected = function(value){
                    $scope.filterSelectedValue = "";
                    $scope.selected = { value: $scope.states[0] };
                    $scope.filterSelected = value;
                    //na diretiva focusOnShow, trata quando o input é novo
                    //como utilizamos o mesmo input para vários filtros
                    //foi preciso também forçar o focus quando o filtro é alterado
                    //sendo assim, não é necessário criar um input para cada opção do filtro
                    document.getElementById("filterBy").focus();
                }

                //show selected field on selected box div
                var addFilterApplyed = function(filter, valueText, valueSelect){
                    if(filter.type == "activeInactive"){
                    	if($scope.filterSelectedValue == "1"){
                    		$translate('common.active.vTrue').then(function (translations) {
                				$scope.filterApplyed.push({"name":filter.name,"value":translations});
                    		  });
                    	}else{
                    		$translate('common.active.vFalse').then(function (translations) {
                    			$scope.filterApplyed.push({"name":filter.name,"value":translations});
                    		  });
                    	}
                    } else if(filter.type == "statusPendency"){
                    	angular.forEach($scope.filterController.statusPendencyValue, function(value, key){
                	        if($scope.filterSelectedValue == value.value.toString()){
                	        	$translate(value.name).then(function (translations) {
                    				$scope.filterApplyed.push({"name":filter.name,"value":translations});
                        		  });
                            }
                	    });
                    } else if(filter.type == "alertPendency"){
                    	$translate('pendency.filter.'+$scope.filterSelectedValue).then(function (translations) {
            				$scope.filterApplyed.push({"name":filter.name,"value":translations});
                		  });
        			}else if(valueText != undefined || valueText != ""){
        				$scope.filterApplyed.push({"name":filter.name,"value":valueText});
        			}
                }
                
                function preApplyFilter () {
                	if(_.isEmpty($scope.filterSelectedValue)) {
                		if($scope.filterSelected.type=='selectStates'){
                			$scope.filterSelectedValue = $scope.selected.value.value;
						}
                		if($scope.filterSelected.type=='activeInactive'){
                			$scope.filterSelectedValue = $scope.statusSelected.value.value;
                		}
					}
                };

                function setSelectedFilter(filter, filterData) {
                	var selectedValue = $scope.filterSelectedValue;
                	//validacao para o filtro de pendencia
                	if(filter == 'pendencyAlert.alert'){
                		filter = $scope.filterSelectedValue;
                		selectedValue = 1;
                	}
                    var element = {};
                    element[filter] = selectedValue;
                    return element;
                };

                $scope.applyFilter = function(){
					preApplyFilter();
					var selectedFilter = $scope.filterSelected.name;
                	var element = setSelectedFilter(selectedFilter, $scope.filterData);
                	$scope.$parent[$scope.pagecontroller].pagination.applyFilter(element);
                	//add fields to div box
                	addFilterApplyed($scope.filterSelected, $scope.filterSelectedValue, $scope.filterSelectedSelectValue);
                    setAttrShowFilterItem($scope.filterSelected.name, 0);
                    $scope.filterSelectedValue = "";
                    $scope.selected = { value: $scope.states[0] };
                    $scope.setFilterSelected(undefined);
                }

                $scope.applyCleanItemFilter = function(){
                	$scope.filterSelectedValue = "";
                    $scope.selected = { value: $scope.states[0] };
                	var selectedFilter = $scope.filterSelected.name;
                	setSelectedFilter(selectedFilter, $scope.filterData);
                    setAttrShowFilterItem($scope.filterSelected.name, 1);
                    $scope.setFilterSelected(undefined);
                }

                $scope.deleteFilterItem = function(index){
            		if($scope.filterApplyed.length > 0) {
            			$scope.filterSelected = $scope.filterApplyed[index];
            			$scope.$parent[$scope.pagecontroller].pagination.removeFilter($scope.filterSelected.name);
            			$scope.applyCleanItemFilter();
            			$scope.filterApplyed.splice(index, 1);
            		}
                }
                
                var init = function() {
                    $scope.filterController = $scope.$parent[$scope.pagecontroller];
                    $scope.translator =  $scope.pagetranslator;
                };
                
                $scope.states = [{value  : 'AC', estado : 'Acre'},
                				 {value  : 'AL', estado : 'Alagoas'},
                				 {value  : 'AP', estado : 'Amapá'},
                				 {value  : 'AM', estado : 'Amazonas'},
                				 {value  : 'BA', estado : 'Bahia'},
                				 {value  : 'CE', estado : 'Ceará'},
                				 {value  : 'DF', estado : 'Distrito Federal'},
                				 {value  : 'ES', estado : 'Espírito Santo'},
                				 {value  : 'GO', estado : 'Goiás'},
                				 {value  : 'MA', estado : 'Maranhão'},
                				 {value  : 'MT', estado : 'Mato Grosso'},
                				 {value  : 'MS', estado : 'Mato Grosso do Sul'},
                				 {value  : 'MG', estado : 'Minas Gerais'},
                				 {value  : 'PA', estado : 'Pará'},
                				 {value  : 'PB', estado : 'Paraíba'},
                				 {value  : 'PR', estado : 'Paraná'},
                				 {value  : 'PE', estado : 'Pernambuco'},
                				 {value  : 'PI', estado : 'Piauí'},
                				 {value  : 'RJ', estado : 'Rio de Janeiro'},
                				 {value  : 'RN', estado : 'Rio Grande do Norte'},
                				 {value  : 'RS', estado : 'Rio Grande do Sul'},
                				 {value  : 'RO', estado : 'Rondônia'},
                				 {value  : 'RR', estado : 'Roraima'},
                				 {value  : 'SC', estado : 'Santa Catarina'},
                				 {value  : 'SP', estado : 'São Paulo'},
                				 {value  : 'SE', estado : 'Sergipe'},
                				 {value  : 'TO', estado : 'Tocantins'}];
				$scope.selected = { value: $scope.states[0] };
				
				$scope.status = [
					{ value  : 1, status : 'Ativo' },
					{ value  : 0, status : 'Inativo'}
				];
				$scope.statusSelected = { value: $scope.status[0] };
                
                
                init();
            }
    	};
    };

})();
