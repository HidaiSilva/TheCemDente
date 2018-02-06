(function () {
    angular
        .module('sgp')
        .service('LoggerService', function logger() {
            var canLog = false;

            return {
                debug: function (msg) {
                    if (canLog) {
                        console.debug(msg);
                    }
                },
                info: function (msg) {
                    if (canLog) {
                        console.log(msg);
                    }
                },
                error: function (msg) {
                    if (canLog) {
                        console.error(msg);
                    }
                }
            };
        });

})();