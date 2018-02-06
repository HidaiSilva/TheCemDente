(function () {
    angular
        .module('sgp')
        .controller('PatologiaConfirmationController', PatologiaConfirmationController);
    function PatologiaConfirmationController($scope, patologia, CrudService, $uibModalInstance, commonsService) {

        var self = this;

        self.load = function(){
			CrudService.patologia.findAll()
			.then(function(response){
				$scope.patients = response.data;
			})
			.catch(function (error) {
				$scope.error(error.message);
			});
        };
        
        self.patologiaElement = {};

        self.cancel = function () {
            $uibModalInstance.close();
        };

        self.delete = function () {
            console.log(self.patologiaElement);
            return CrudService.patologia.delete(self.patologiaElement.id)
                .then(function (response) {
                    $uibModalInstance.close(response.data);
                    
                    commonsService.success('Patologia removido com sucesso!');
					location.reload();
                    // Order = $resource("http://localhost:8080/theCemDente/patologia/getall");
                    // console.log(Order);
					// $timeout( function(){
					// }, 500 );
                })
                .catch(function (error) {
                    if (error.objeto.data.exception.includes('LinkedExpcetion')) {
                        commonsService.error('patologia.alert.linkedException');
                    } else {
                        commonsService.error('common.alert.genericError');
                    }
                });
        };

        var init = function () {
            //To preserve original patologia.
            self.patologiaElement = angular.copy(patologia);
        }

        init();
    };

    PatologiaConfirmationController.$inject = ['$scope', 'patologia', 'CrudService', '$uibModalInstance', 'commonsService'];
})();
