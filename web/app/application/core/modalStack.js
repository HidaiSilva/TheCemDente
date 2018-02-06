(function() {
	angular
		.module('sgp')
		.run([ '$rootScope', '$uibModalStack', setupUibModal ]);

	setupUibModal.$inject = [ '$rootScope', '$uibModalStack' ];

	function setupUibModal($rootScope, $uibModalStack) {
		$rootScope.$on('$locationChangeStart', handleLocationChange);

		function handleLocationChange() {
			$uibModalStack.dismissAll();
		}
	};
	
})();