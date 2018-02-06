(function () {
    angular
        .module('sgp')
        .service('commonsService', ['$translate', 'toastr',
            function ($translate, toastr) {
                return {
                    // Notifications
                    info: function (message) {
                        toastr.info($translate.instant(message), $translate.instant('notification.info.title'));
                    },
                    success: function (message) {
                        toastr.success($translate.instant(message), $translate.instant('notification.success.title'));
                    },
                    warning: function (message) {
                        toastr.warning($translate.instant(message), $translate.instant('notification.warning.title'));
                    },
                    error: function (message) {
                        toastr.error($translate.instant(message), $translate.instant('notification.error.title'));
                    }
                }
            }
        ]);
})();
