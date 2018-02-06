(function () {
    angular
        .module('sgp')
        .controller('PacienteConfirmationController', PacienteConfirmationController);
    function PacienteConfirmationController($scope,$http, paciente, CrudService, $uibModalInstance, commonsService) {

        var self = this;
        
        let tokenHeader = JSON.parse(sessionStorage.getItem("token")) ;
        console.log(tokenHeader);

        self.load = function(){
			CrudService.paciente.findAll()
			.then(function(response){
				$scope.patients = response.data;
			})
			.catch(function (error) {
				$scope.error(error.message);
			});
        };
        
        self.pacienteElement = {};

        self.cancel = function () {
            $uibModalInstance.close();
        };

        // self.delete = function () {
        //     console.log(self.pacienteElement);
        //     return CrudService.paciente.delete(self.pacienteElement.id)
        //         .then(function (response) {
        //             $uibModalInstance.close(response.data);
                    
        //             commonsService.success('Paciente removido com sucesso!');
		// 			location.reload();
        //             // Order = $resource("http://localhost:8080/theCemDente/paciente/getall");
        //             // console.log(Order);
		// 			// $timeout( function(){
		// 			// }, 500 );
        //         })
        //         .catch(function (error) {
        //             if (error.objeto.data.exception.includes('LinkedExpcetion')) {
        //                 commonsService.error('paciente.alert.linkedException');
        //             } else {
        //                 commonsService.error('common.alert.genericError');
        //             }
        //         });
        // };

        self.delete = function () {
            console.log(self.pacienteElement);

            return $http({
				url: "http://localhost:8080/theCemDente/paciente/deletePaciente/" + self.pacienteElement.id,
				method: "DELETE",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": tokenHeader
				}
			}).then(function(response){
                $scope.patients = response.data;
                $uibModalInstance.close(response.data);
                commonsService.success('Paciente removido com sucesso!');
                location.reload();
				})
                .catch(function (error) {
                    $uibModalInstance.close();
                    if (error.statusText === 'Forbidden') {
                        commonsService.error('Você não tem autorização para fazer essa ação!');
                    } else {
                        commonsService.error('Erro ao completar ação');
                    }
                    console.log(error.statusText);
                });

            // return CrudService.paciente.delete(self.pacienteElement.id)
            //     .then(function (response) {
            //         $uibModalInstance.close(response.data);
                    
            //         commonsService.success('Paciente removido com sucesso!');
			// 		location.reload();
            //         // Order = $resource("http://localhost:8080/theCemDente/paciente/getall");
            //         // console.log(Order);
			// 		// $timeout( function(){
			// 		// }, 500 );
            //     })
            //     .catch(function (error) {
            //         if (error.objeto.data.exception.includes('LinkedExpcetion')) {
            //             commonsService.error('paciente.alert.linkedException');
            //         } else {
            //             commonsService.error('common.alert.genericError');
            //         }
            //     });
        };

        $scope.delete = function () {

		};

        var init = function () {
            //To preserve original paciente.
            self.pacienteElement = angular.copy(paciente);
        }

        init();
    };

    PacienteConfirmationController.$inject = ['$scope', '$http', 'paciente', 'CrudService', '$uibModalInstance', 'commonsService'];
})();
