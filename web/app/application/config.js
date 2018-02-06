(function() {

    angular
        .module('sgp')
        .config(ConfigInterceptor);

    ConfigInterceptor.$inject = ['$httpProvider'];

    function ConfigInterceptor($httpProvider) {
        $httpProvider.interceptors.push('sgpInterceptor');
    }
})();
