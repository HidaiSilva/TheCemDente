(function() {

    angular
        .module('sgp')
        .config(Router);

    Router.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Router($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        var states = [];

		var home = {
			name: 'home',
            url: '/home',
            controller: 'HomeCtrl',
            controllerAs: 'homectrl',
            templateUrl: 'application/views/home/home.html',
		};
		states.push(home);

        var login = {
            name: 'login',
            url: '/',
            controller: 'LoginCtrl',
            controllerAs: 'loginctrl',
            templateUrl: 'application/views/login/login.html'
        };
        states.push(login);
        
        var paciente = {
            name: 'paciente',
            url: '/paciente',
            controller: 'PacienteCtrl',
            controllerAs: 'pacienteCtrl',
            templateUrl: 'application/views/paciente/paciente.html'
        };
        states.push(paciente); 

        var patologia = {
            name: 'patologia',
            url: '/patologia',
            controller: 'PatologiaCtrl',
            controllerAs: 'patologiaCtrl',
            templateUrl: 'application/views/patologia/patologia.html'
        };
        states.push(patologia); 
        
        states.forEach(function(state) {
            $stateProvider.state(state);
        });
    };

})();

