define([ 'sgp' ], function(app) {
	app.controller('UserCtrl', [ '$scope', '$rootScope', 'CrudService', '$httpParamSerializer', '$location',
		function($scope, $rootScope, CrudService, $httpParamSerializer, $location) {
			
			
			$scope.user = {};
			
			$scope.roles = [
					'Admin',
					'User'
			];
			
			$scope.save = function(){
				console.log($scope.user);
				CrudService.user.save($scope.user)
				.then(function(response){
					$location.path("users");
				})
				.catch(function(){
				});
			}
			
//			Exemplo de chamada do CrudService
//			CrudService.login.logar($scope.user).then(function(response) {
//				
//			}).catch(function(error) {
//				
//			});
	        //JQUERY
	        $(document).ready(function() {
	        	var urlParams = $location.search();
	        	if(urlParams === undefined){
	        		$scope.user = {};
	        	}else{
	        		CrudService.user.findOne(urlParams.id)
	        		.then(function(response){
	        			console.log(response.data);
	        			$scope.user = response.data;
	        		})
	        		.catch()
	        	}
	        });

		} ]);
});