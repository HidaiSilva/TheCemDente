(function(){
	angular
		.module('sgp', ['ui.router', 'pascalprecht.translate', 'ui.bootstrap', 'toastr', 'ng.httpLoader', 'ngIdle', 'ngMask', 'ui.select', 'ngSanitize', 'datatables'])

		.config(['$uibTooltipProvider', function ($uibTooltipProvider) {
		    $uibTooltipProvider.options({
				'appendToBody': true,
				'placement' : 'top'
		    });
		}])

		

		.config(['KeepaliveProvider', 'IdleProvider',
			function (KeepaliveProvider, IdleProvider) {
				IdleProvider.idle(20 * 60);
				IdleProvider.timeout(30);
				KeepaliveProvider.interval(10);
		}])

		.config(function (toastrConfig) {
			angular.extend(toastrConfig, {
				autoDismiss: false,
				containerId: 'toast-container',
				maxOpened: 0,
				showCloseButton: true,
				newestOnTop: true,
				positionClass: 'toast-top-right',
				progressBar: true,
				preventDuplicates: false,
				preventOpenDuplicates: false,
				target: 'body'
			});
		})

		.config(['httpMethodInterceptorProvider',
			function (httpMethodInterceptorProvider) {
				httpMethodInterceptorProvider.whitelistLocalRequests();
			}
		])
})();