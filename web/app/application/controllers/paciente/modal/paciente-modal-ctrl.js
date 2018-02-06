(function () {
	angular
		.module('sgp')
		.controller('PacienteModalController', PacienteModalController);
	function PacienteModalController($scope, paciente, CrudService, $uibModalInstance, commonsService) {

		var self = this;
		$scope.pacienteModal = {};
		$scope.pacienteModal.active = '1';

		$scope.dtInstance = {};

		$scope.states = [
			{ value: '' , estado: 'Selecione um estado'},
			{ value: 'AC', estado: 'Acre' },
			{ value: 'AL', estado: 'Alagoas' },
			{ value: 'AP', estado: 'Amapá' },
			{ value: 'AM', estado: 'Amazonas' },
			{ value: 'BA', estado: 'Bahia' },
			{ value: 'CE', estado: 'Ceará' },
			{ value: 'DF', estado: 'Distrito Federal' },
			{ value: 'ES', estado: 'Espírito Santo' },
			{ value: 'GO', estado: 'Goiás' },
			{ value: 'MA', estado: 'Maranhão' },
			{ value: 'MT', estado: 'Mato Grosso' },
			{ value: 'MS', estado: 'Mato Grosso do Sul' },
			{ value: 'MG', estado: 'Minas Gerais' },
			{ value: 'PA', estado: 'Pará' },
			{ value: 'PB', estado: 'Paraíba' },
			{ value: 'PR', estado: 'Paraná' },
			{ value: 'PE', estado: 'Pernambuco' },
			{ value: 'PI', estado: 'Piauí' },
			{ value: 'RJ', estado: 'Rio de Janeiro' },
			{ value: 'RN', estado: 'Rio Grande do Norte' },
			{ value: 'RS', estado: 'Rio Grande do Sul' },
			{ value: 'RO', estado: 'Rondônia' },
			{ value: 'RR', estado: 'Roraima' },
			{ value: 'SC', estado: 'Santa Catarina' },
			{ value: 'SP', estado: 'São Paulo' },
			{ value: 'SE', estado: 'Sergipe' },
			{ value: 'TO', estado: 'Tocantins' }
		];

		$scope.cancel = function () {
			$uibModalInstance.close();
		};

		$scope.reloadData = function () {
			$scope.dtInstance.rerender();
		}

		self.load = function(){
			CrudService.paciente.findAll()
			.then(function(response){
				$scope.patients = response.data;
			})
			.catch(function (error) {
				$scope.error(error.message);
			});
		};

		$scope.save = function () {
			$scope.pacienteModal.estado = $scope.selected_state.estado;

			return CrudService.paciente.save($scope.pacienteModal)
				.then(function (response) {

					commonsService.success('Paciente criado com sucesso!');
					$uibModalInstance.close(response.data);
					location.reload();
				})
				.catch(function (error) {
					if (error.objeto.data.exception.includes('EmptyOrNullValueException')) {
						commonsService.error('paciente.alert.emptyOrNullValueException');
						return;
					} else {
						if (error.objeto.data.exception.includes('UniqueConstraintException')) {
							commonsService.error('paciente.alert.uniqueConstraintException.' + error.objeto.data.message);
							return;
						}
					}
				});
		};

		var init = function() {
			//To preserve original organization.
			$scope.pacienteModal = angular.copy(paciente);
			//new / edit
			if(_.isUndefined($scope.pacienteModal)){
				console.log('creating');
				console.log($scope.states[0]);
		        $scope.selected_state = $scope.states[0];
			}else{
				_.each($scope.states, function(state) {
					//$scope.pacienteModal.estado = $scope.selected_state.estado;
					if($scope.pacienteModal.estado == state.estado){
						console.log('entrou no if ', $scope.pacienteModal.estado);
						console.log(state)
						$scope.selected_state = state;
					}
				});
			}
		}

		init();
	};

	PacienteModalController.$inject = ['$scope', 'paciente', 'CrudService', '$uibModalInstance', 'commonsService'];
})();
