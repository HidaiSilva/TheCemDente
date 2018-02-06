(function () {
	angular
		.module('sgp')
		.controller('PatologiaCtrl', PatologiaCtrl);
	
	function PatologiaCtrl($scope, CrudService,DTOptionsBuilder, DTColumnDefBuilder, $httpParamSerializer, $location, $uibModal) {
		
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
		self.openModal = function(patologia) {
            var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'application/views/patologia/modal/patologia-modal.html',
				size: 'md',	
				controller: 'PatologiaModalController',
				controllerAs: '$ctrl',
				resolve: {
					patologia: function () {
						return patologia;
					}
				}
			});
        };
        
    	//Modal
		 self.openModalConfirmation = function(patologia) {
            var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'application/views/patologia/modal/confirmation-modal.html',
				size: 'md',	
				controller: 'PatologiaConfirmationController',
				controllerAs: 'patologiaConfirmationCtrl',
				resolve: {
					patologia: function () {
						return patologia;
					}
				}
			});
		};
		
		$scope.load = function(){
			CrudService.patologia.findAll()
			.then(function(response){
				$scope.patologias = response.data;
			})
			.catch(function (error) {
				$scope.error(error.message);
			});
		};
    	
    	//Remove
        self.remove = function (id) {
    		CrudService.patologia.remove(id)
    		.then(function(response){
    			self.load();
    			commonsService.success('patologia.alert.success');
    		});
		}
		
		$scope.load();
        
        
	};
	
	PatologiaCtrl.$inject = ['$scope', 'CrudService','DTOptionsBuilder','DTColumnDefBuilder', '$httpParamSerializer', '$location', '$uibModal'];
})();