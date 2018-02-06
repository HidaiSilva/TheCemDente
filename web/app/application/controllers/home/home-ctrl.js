(function () {
	angular
		.module('sgp')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl($scope, $rootScope, $translate, CrudService, $httpParamSerializer, $location, commonsService) {
		var storage = JSON.parse(sessionStorage.getItem("user")) ;
		$scope.actualUser = storage.nome;

	};
	HomeCtrl.$inject = ['$scope', '$rootScope', '$translate', 'CrudService', '$httpParamSerializer', '$location', 'commonsService',];
})();