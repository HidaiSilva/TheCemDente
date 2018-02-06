(function () {
	angular
		.module('sgp')
        .directive('pagination', pagination);
    	
    	function pagination() {
        	return {
	            restrict : "EA",
	            templateUrl : 'application/views/templates/pagination.html',
	            scope : {
	                pagecontroller : '@'
	            },
	            controller: function($scope){
	                var init = function() {
	                    $scope.pageController = $scope.$parent[$scope.pagecontroller];
	                };
	
	                init();
	            }
    	};
    };
})();