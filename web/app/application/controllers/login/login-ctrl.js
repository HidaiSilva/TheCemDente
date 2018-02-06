
(function () {
	angular
		.module('sgp')
		.controller('LoginCtrl', LoginCtrl);

	function LoginCtrl($scope, $rootScope, $translate, CrudService, $httpParamSerializer, $location, commonsService) {

		
		$scope.user = {};

		$scope.logon = function () {
			
			$rootScope.user = $scope.user.username;
			
			CrudService.login.logon($scope.user).then(function (response) {
				
				console.log(response.headers('Token'));

				sessionStorage.setItem('user', JSON.stringify(response.data));
				sessionStorage.setItem('token', JSON.stringify(response.headers('Token')));
				$location.path("home");
				commonsService.success('Bem-vindo, ' + $rootScope.user + '!');
			}).catch(function (error) {
				commonsService.error('login.loginError');
			});
		}

		$scope.changeLang = function (lang) {
			$scope.language = lang;
			$translate.use(lang);
		};
	};
	LoginCtrl.$inject = ['$scope', '$rootScope', '$translate', 'CrudService', '$httpParamSerializer', '$location', 'commonsService',];
})();