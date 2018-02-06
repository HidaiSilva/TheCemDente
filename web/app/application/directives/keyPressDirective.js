//a directive to 'enter key press' in elements with the "ng-enter" attribute
(function() {
	angular.module('sgp').directive('ngEnter', function () { 

        return function (scope, element, attrs) {

            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                	if(!$(".checkEnable")[0].disabled){
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });
                	}

                    event.preventDefault();
                }
            });
        };
    })
})();