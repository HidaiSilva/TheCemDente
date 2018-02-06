//a directive to 'focus' the element after ng-show
(function() {
	angular.module('sgp').directive('focusOnShow', function() {

		return {
			restrict : 'A',
			link : function($scope, $element, $attr) {
				if ($attr.ngShow) {
					$scope.$watch($attr.ngShow, function(newValue) {
						if (newValue) {
							setTimeout(function() {
								$element[0].focus();
							}, 100);
						}
					})
				}
				if ($attr.ngHide) {
					$scope.$watch($attr.ngHide, function(newValue) {
						if (!newValue) {
							setTimeout(function() {
								$element[0].focus();
							}, 100);
						}
					})
				}

			}
		};
	})
})();