(function () {
	angular
		.module('sgp')
		.controller('PacienteCtrl', PacienteCtrl);
	
	function PacienteCtrl($scope, CrudService,DTOptionsBuilder, DTColumnDefBuilder, $httpParamSerializer, $location, $uibModal) {
		
		var self = this;

		var language = {
			"sEmptyTable": "Nenhum registro encontrado",
			"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
			"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
			"sInfoFiltered": "(Filtrados de _MAX_ registros)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "_MENU_ resultados por página",
			"sLoadingRecords": "Carregando...",
			"sProcessing": "Processando...",
			"sZeroRecords": "Nenhum registro encontrado",
			"sSearch": "Pesquisar",
			"oPaginate": {
				"sNext": "Próximo",
				"sPrevious": "Anterior",
				"sFirst": "Primeiro",
				"sLast": "Último"
			},
			"oAria": {
				"sSortAscending": ": Ordenar colunas de forma ascendente",
				"sSortDescending": ": Ordenar colunas de forma descendente"
			}
		}

		$scope.dtColumnDefs = [
			DTColumnDefBuilder.newColumnDef(0).notSortable().withOption('width', '100px'),
		];

		$scope.dtOptions = DTOptionsBuilder.newOptions()
		.withLanguage(language);

        //Modal
		self.openModal = function(paciente) {
            var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'application/views/paciente/modal/paciente-modal.html',
				size: 'md',	
				controller: 'PacienteModalController',
				controllerAs: '$ctrl',
				resolve: {
					paciente: function () {
						return paciente;
					}
				}
			});
        };
        
    	//Modal
		 self.openModalConfirmation = function(paciente) {
            var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'application/views/paciente/modal/confirmation-modal.html',
				size: 'md',	
				controller: 'PacienteConfirmationController',
				controllerAs: 'pacienteConfirmationCtrl',
				resolve: {
					paciente: function () {
						return paciente;
					}
				}
			});
		};
		
		$scope.load = function(){
			CrudService.paciente.findAll()
			.then(function(response){
				$scope.patients = response.data;
			})
			.catch(function (error) {
				$scope.error(error.message);
			});
		};

    	
    	//Remove
        self.remove = function (id) {
    		CrudService.paciente.remove(id)
    		.then(function(response){
    			self.load();
    			commonsService.success('paciente.alert.success');
    		});
		}
		
		$scope.load();
        
        
	};
	
	PacienteCtrl.$inject = ['$scope', 'CrudService','DTOptionsBuilder','DTColumnDefBuilder', '$httpParamSerializer', '$location', '$uibModal'];
})();