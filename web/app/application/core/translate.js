(function() {

    angular
        .module('sgp')
        .config(Translate);

    Translate.$inject = ['$translateProvider'];
    
    var ptBr = {

    		// Login Screen
    		login: {
    			signUp: "Acessar",
    			signText: "Insira seu usuário e senha para acessar a aplicação",
    			username: 'Usuário',
    			password: 'Senha',
    			submit: 'Acessar',
    			forget: 'Esqueceu a senha?',
    			loginError: 'Login e/ou senha inválidos!'
    		},

    		// Home, after logged in
    		home: {
    			welcome: 'Bem-vindo',
    			performance: 'Performance',
    			analytics: 'Análises',
    			user: 'Usuário',
    			calendar: 'Calendário'
    		},
    		// Register user Screen
    		user: {
    			name: 'Nome',
    			login: 'Login',
    			email: 'E-mail',
    			role: 'Perfil',
    			status: 'Status',
    			submit: 'Salvar',
    			active: {
    				vFalse: 'INATIVO',
    				vTrue: 'ATIVO'
    			},
    			changeDate: 'Data alteração',
    			lastLogin: 'Último login',
    			actions: 'Ações',
    			delete: 'Deletar',
    			edit: 'Editar',
    			confirmDelete: "Você tem certeza?"
    		},

    		// Header Screen
    		header: {
    			system : {
    				initial : 'SGP',
    				name : 'Chiavini'
    			},
    			user: {
    				edtUser: 'Editar perfil',
    				edtPassword: 'Alterar senha'
    			},
    			users: {
    				title: 'Usuários',
    				showAll: 'Mostrar todos usuários',
    				register: 'Registrar usuário'
    			},
    			changeLanguage: 'Alterar idioma',
    			logout: 'Sair',
    			language: {
    				english: 'Inglês',
    				portuguese: 'Português'
    			},
    			modality: {
    				title: 'Modalidades',
    				showAll: 'Mostrar todos'
    			},
    			business: {
    				title: 'Negócios',
    				showAll : 'Mostrar todos'
    			},
    			division: {
    				title: 'Divisões',
    				showAll : 'Mostrar todos'
    			},
    			organization : {
    				title : 'Órgãos'
    			},
    			demand : {
    				title : 'Demandas'
    			},
    			pendency: {
    				title : 'Pendências',
    			}
    		},


    		// notifications used in toastr
    		notification: {
    			info: {
    				title: 'Informação'
    			},
    			success: {
    				title: 'Sucesso'
    			},
    			warning: {
    				title: 'Atenção'
    			},
    			error: {
    				title: 'Erro'
    			}
    		},
    		register: {
    			title: 'Registro de usuários'
    		},
    		// change password/forgot password
    		changePassword: {
    			title: '	Trocar Senha',
    			insert: 'Insira sua nova senha',
    			confirm: 'Confirme a senha',
    			button: 'Mudar senha',
    			titleRules: 'Regras da senha ',
    			rules: {
    				oneLetter: 'Ao menos uma letra.',
    				capitalLetter: 'Ao menos uma letra maiúscula.',
    				lowerCase: 'A senha deve conter uma letra minúscula.',
    				oneNumber: 'Ao menos um número.',
    				minLength: 'Ao menos 8 caracteres.',
    				passwordMatch: 'As senhas devem ser iguais.',
    				noSpace: 'Não deve conter espaço.'
    			},
    			alert: {
    				success: "Senha alterada com sucesso!",
    				error: "Erro ao alterar senha!"
    			},
    		},
    		modality: {
    			name: 'Modalidade',
    			initials: 'Sigla',
    			status: 'Status',
    			filter: {
    				name: 'Modalidade',
    				initials: 'Sigla',
    				active	: 'Status',
    				lastModifiedDate: 'Última Modificação',
    				lastModifiedBy: {
    					fullName: 'Modificado por'
    				}
    			},
    			alert: {
    				success: 'Modalidade salva com sucesso.',
    				emptyOrNullValueException: 'Favor preencher os campos obrigatórios.',
    				removeSuccess: 'Modalidade excluída com sucesso.',
    				confirmRemove: 'Deseja realmente excluir a modalidade: ',
    				uniqueConstraintException: {
    					Name: 'O seguinte campo não pode ser duplicado: Modalidade',
    					Initials: 'O seguinte campo não pode ser duplicado: Sigla',
    				},
					linkedException: 'Não foi possível exluir a Modalidade, pois o mesmo possui vinculo com Pendencia.'
    			}
    		},
    		modalitiesRegister: {
    			modality: 'modalidade',
    			title: 'Registro de modalidades',
    			modalityName: 'Nome da modalidade',
    			modalityInitials: 'Sigla da modalidade',
    			modalityStatus: 'Status da modalidade'
    		},

    		organization: {
    			organization : 'Órgão',
    			regional : 'Regional',
    			street : 'Logradouro',
    			number : 'Número',
    			complement: 'Complemento',
    			district : 'Bairro',
    			city : 'Município',
    			state : 'Estado',
    			zipCode : 'CEP',
    			phone : 'Telefone',
    			type: 'Tipo',
    			initials: 'Sigla',
    			status: 'Status',
    			name: 'Órgão',
    			filter: {
    				name: 'Órgão',
    				initials: 'Sigla',
    				regional: 'Regional',
    				address: {
    						street: 'Logradouro',
    						number: 'Número',
    						district: 'Bairro',
    						city: 'Município',
    						state: 'Estado',
    						zipCode: 'CEP',
    				},
    				active	: 'Status',
    				lastModifiedDate: 'Última Modificação',
    				lastModifiedBy: {
    					fullName: 'Modificado por'
    				},
    				phone: 'Telefone'
    			},
    			alert: {
    				success: 'Órgão salvo com sucesso.',
    				error: 'Erro ao salvar Órgão!',
    				emptyOrNullValueException: 'Favor preencher os campos obrigatórios.',
    				uniqueConstraintException: {
    					Name: 'O seguinte campo não pode ser duplicado: Órgão',
    					Initials: 'O seguinte campo não pode ser duplicado: Sigla',
    				},
    				removeSuccess: 'Órgão excluído com sucesso!',
    				removeError: 'Erro ao excluir órgão!',
    				confirmRemove: 'Deseja realmente excluir o órgão: ',
    				linkedException: 'Não foi possível exluir o Órgão, pois o mesmo possui vinculo com Pendencia.'
    			}
    		},

    		business: {
    			name: 'Negócio',
    			initials: 'Sigla',
    			status: 'Status',
    			filter:{
    				name: 'Negócio',
    				initials: 'Sigla',
    				active	: 'Status',
    				lastModifiedDate: 'Última Modificação',
    				lastModifiedBy: {
    					fullName: 'Modificado por'
    				}
    			},
    			alert: {
    				success: 'Negócio salvo com sucesso!',
    				error: 'Erro ao salvar negócio!',
    				errorEmptyField: 'Preencha todos os campos obrigatórios!',
    				errorDuplicateFieldName: 'O seguinte campo não pode ser duplicado: Negócio',
    				errorDuplicateFieldInitials: 'O seguinte campo não pode ser duplicado: Sigla',
    				removeSuccess: 'Negócio excluído com sucesso!',
    				removeError: 'Erro ao excluir negócio!',
    				confirmRemove: 'Deseja realmente excluir o negócio: ',
    				linkedException: 'Não foi possível exluir o Negócio, pois o mesmo possui vinculo com Pendencia.'
    			}
    		},
    		division: {
    			name: 'Divisão',
    			initials: 'Sigla',
    			status: 'Status',
    			filter:{
    				name: 'Divisão',
    				initials: 'Sigla',
    				active	: 'Status',
    				lastModifiedDate: 'Última Modificação',
    				lastModifiedBy: {
    					fullName: 'Modificado por'
    				}
    			},
    			alert: {
    				success: 'Divisão salva com sucesso!',
    				error: 'Erro ao salvar Divisão!',
    				errorEmptyField: 'Preencha todos os campos obrigatórios!',
    				errorDuplicateFieldName: 'O seguinte campo não pode ser duplicado: Divisão',
    				errorDuplicateFieldInitials: 'O seguinte campo não pode ser duplicado: Sigla',
    				removeSuccess: 'Divisão excluído com sucesso!',
    				removeError: 'Erro ao excluir Divisão!',
    				confirmRemove: 'Deseja realmente excluir a Divisão: ',
    				linkedException: 'Não foi possível exluir a Divisão, pois o mesmo possui vinculo com Pendência.'
    			}
    		},
    		
    		demand : {
    			divisionType : 'Divisão',
    			division: 'Divisão',
    			demand : 'Demanda',
    			initial : 'Sigla',
    			deadline : 'Prazo',
    			status : 'Status',
    			lastUser : 'Usuário modificação',
    			lastModifiedDate : 'Data modificação',
    			addBusiness : 'Adicionar negócio relacionado',
    			alert: 'Alerta',
    			divisionSelect : 'Tipo de negócio',
    			associatedBusiness : 'Negócios associados',
    			filter : {
    				demandDesc	: 'Demanda',
    				initials	: 'Sigla',
    				active	: 'Status',
    				deadline: 'Prazo',
    				lastModifiedDate: 'Última Modificação',
    				lastModifiedBy: {
    					fullName: 'Modificado por'
    				},
    				division: {
    					name: 'Divisão',
    					initials: 'Sigla Divisão'
    				}
    			},
    			alertPopUp: {
    				success: 'Demanda salva com sucesso!',
    				emptyOrNullValueException: 'Favor preencher os campos obrigatórios.',
    				removeSuccess: 'Demanda excluída com sucesso!',
    				confirmRemove: 'Deseja realmente excluir a demanda: ',
    				uniqueConstraintException: {
    					Demand: 'O seguinte campo não pode ser duplicado: Demanda',
    					Initials: 'O seguinte campo não pode ser duplicado: Sigla',
    				},
    				linkedException: 'Não foi possível exluir a Demanda, pois o mesmo possui vinculo com Pendencia.'
    			}
    		},
    		
    		// Pendencia
    		pendency: {
    			id: 'Pendência',
    			summary: 'Resumo',
    			alert: 'Alerta',
    			client: 'Cliente',
    			business: 'Tipo de Negócio',
    			division: 'Divisão',
    			modality: 'Modalidade',
    			demand: 'Demanda',
    			desc: 'Descrição',
    			organization: 'Órgão',
				process: 'Processo',
				prevision: 'Previsão',
    			deadline: 'Prazo Final',
    			responsible: 'Responsável',
    			extended: 'Prorrogado',
    			alertPopUp: {
    				success: 'Pendência salva com sucesso!',
    				emptyOrNullValueException: 'Favor preencher os campos obrigatórios.',
    			},
				status : {
					status: 'Status',
					pending : 'Pendente',
					completeTechnicalProduction: 'Produção Técnica Completa',
					technicalValidationCompleted: 'Validação Técnica Concluída',
					completedValidation: 'Validação Concluída',
					completed: 'Concluído',
					canceled: 'Cancelado'
				},
				filter : {
					id: 'Pendência',
					summary: 'Resumo',
					contact: {
								fullName: 'Cliente',
							},
					business:{
								name: 'Tipo de Negócio'
							},
					division: {
								name: 'Divisão',
							},
					modality: {
								name: 'Modalidade'
					},
					demand: {
								demandDesc: 'Demanda',
								deadline: 'Alerta'
							},
					description: 'Descrição',
					organization: {
								name: 'Organização'
							},
					contract : {
								name: 'Contrato'
							},
					process: 'Processo',
					prevision: 'Previsão',
					status: 'Status',
					deadline: 'Prazo Final',
					pendencyAlert: {
	    				alert: 'Alerta',
	    				priority: 'Alta Prioridade',
	    				extended: 'Prorrogado',
	    				signifChange: 'Alteração Significativa',
	    				techUnvbl: 'Indisponibilidade Técnica'
	    			}
    			},
    			modal : {
    				summary: 'Resumo',
    				initialDate: 'Data de Início',
    				createdDate: 'Criado em',
    				createdBy: 'Criado por',
    				intervalDate: 'Intervalo',
    				intervalTime: 'Intervalo de Tempo',
    				dateFirstAction: 'Data da Primeira Ação',
    				highPriority: 'Alta Prioridade',
    				interval: {
    					days: 'Dias',
    					months: 'Meses',
    					years: 'Anos'
    				},
    				wizard : {
    					page1 : {
    						title : 'Principais',
    					},
    					page2 : {
    						title: 'Adicionais',
    					},
    				},
    			},
    		},
    		
    		common: {
    			insert: 'Inserir',
    			update: 'Atualizar',
    			delete: 'Excluir',
    			edit: 'Editar',
    			showDetails : 'Exibir detalhes',
    			confirmDelete : 'Confirmação de exclusão',
    			lastModifiedDate: 'Última modificação',
    			lastLogin: 'Modificado por',
    			userLast : 'Último usúario',
    			dateLast : 'Última data',
    			filter: 'Filtrar',
    			isRequired: ' é obrigatório',
    			loading: 'Aguarde',
    			translatePt: 'Traduzir essa pagina para portugues',
    			translateEn: 'Traduzir essa pagina para inglês',
    			noRecordsFound: 'Nenhum resultado encontrado',
    			filtersApplied: 'FILTROS APLICADOS',
    	        filterRemove:   'Remover Filtro',
    	        totalOfRecords: 'Total de registros: ',
    	        rowExpansion:	'Expandir',
    	        phoneType: {
    	        	commercial: 'Comercial',
    	        	residential: 'Residencial',
    	        	cellPhone: 'Celular'
    	        },
    			filterSelect: {
    				0: 'Não',
    				1: 'Sim'
    			},
    			active: {
    				vFalse: 'INATIVO',
    				vTrue: 'ATIVO',
    				0: 'INATIVO',
    				1: 'ATIVO'
    			},
    			tooltip: {
    				edit: 'Editar',
    				delete: 'Excluir'
    			},
    			actions: 'Ações',
    			alert : {
    				messageRemove : 'Você selecionou para excluir: ',
    				confirmRemove : 'Se essa ação é a desejada, por favor clique em excluir para continuar, ou clique em cancelar para retornar para a página.',
    				genericError  : 'Houve um erro ao realizar a operação. Por favor tente novamente ou contate o Administrador do Sistema.'
    			}
    		},
    		button: {
    			save: 'Salvar',
    			update: 'Atualizar',
    			finish: 'Finalizar',
    			cancel: 'Cancelar',
    			delete: 'Excluir',
    			edit: 'Editar',
    			filter: 'Filtrar por',
    			show: 'Visualizar',
    			draft: 'Utilizar Como Rascunho',
    			next: 'Próximo',
    			previous: 'Voltar'
    		}
    	};

    var enUs = {

    		// Login Screen
    		login: {
    			signUp: "Sign Up",
    			signText: "Enter your user and password to access the application",
    			username: 'Username',
    			password: 'password',
    			submit: 'Log In',
    			forget: 'Forget password?',
    			loginError: 'Invalid login and/or password!'
    		},

    		// Home, after logged in
    		home: {
    			welcome: 'Welcome',
    			performance: 'Performance',
    			analytics: 'Analytics',
    			user: 'User',
    			calendar: 'Calendar'
    		},

    		// Register user Screen
    		user: {
    			name: 'Name',
    			login: 'Login',
    			email: 'E-mail',
    			role: 'Role',
    			status: 'Status',
    			submit: 'Save',
    			active: {
    				vFalse: 'INACTIVE',
    				vTrue: 'ACTIVE'
    			},
    			changeDate: 'Change date',
    			lastLogin: 'Last login',
    			actions: 'Actions',
    			delete: 'Delete',
    			edit: 'Edit',
    			confirmDelete: "Are you sure?"
    		},

    		// Header Screen
    		header: {
    			system : {
    				initial : 'SGP',
    				name : 'Chiavini'
    			},
    			user: {
    				edtUser: 'Editar perfil',
    				edtPassword: 'Alterar senha'
    			},
    			users: {
    				title: 'Users',
    				showAll: 'Show all users',
    				register: 'Register user'
    			},
    			changeLanguage: 'Change language',
    			logout: 'Logout',
    			language: {
    				english: 'English',
    				portuguese: 'Portuguese'
    			},
    			modality: {
    				title: 'Modalities',
    				showAll: 'Show all'
    			},
    			business:{
    				title: 'Business',
    				showAll : 'Show all'
    			},
    			organization : {
    				title : 'Organizations'
    			},
    			division: {
    				title: 'Divisions',
    				showAll : 'Show all'
    			},
    			demand : {
    				title : 'Demands'
    			},
    			pendency: {
    				title : 'Pendencies'
    			}
    		},

    		// change password/forgot password
    		changePassword: {
    			title: 'Change Password',
    			insert: 'Insert Your New Password',
    			confirm: 'Confirm The Password',
    			button: 'Change Password',
    			titleRules: 'Password Rules',
    			rules: {
    				oneLetter: 'At least one letter.',
    				capitalLetter: 'At least one capital letter.',
    				lowerCase: 'A senha deve conter uma letra minúscula.',
    				oneNumber: 'At least one number.',
    				minLength: 'Be at least 8 characters.',
    				passwordMatch: 'Password must be equal.',
    				noSpace: 'Must not have whitespace.'
    			},
    			alert: {
    				success: "Your password has been changed successfully!",
    				error: "An error has ocurred!"
    			},
    		},

    		// notifications used in toastr
    		notification: {
    			info: {
    				title: 'Information'
    			},
    			success: {
    				title: 'Success'
    			},
    			warning: {
    				title: 'Warning'
    			},
    			error: {
    				title: 'Error'
    			}
    		},
    		register: {
    			title: 'User Register'
    		},
    		modality: {
    			name: 'Modality',
    			initials: 'Initials',
    			status: 'Status',
    			filter: {
    				name: 'Modality',
    				initials: 'Initials',
    				active	: 'Status',
    				lastModifiedDate: 'Last Modification',
    				lastModifiedBy: {
    					fullName: 'Modified by'
    				}
    			},
    			alert: {
    				success: 'Modality successfully saved.',
    				emptyOrNullValueException: 'Please fill in the required fields.',
    				removeSuccess: 'Modality successfully removed.',
    				confirmRemove: 'Do you really want to delete the modality: ',
    				genericError  : 'There was an error while trying to execute the operation. Please try again or contact the System Administrator.',
    				uniqueConstraintException: {
    					Name: 'The following field can not be duplicated: Modality',
    					Initials: 'The following field can not be duplicated: Initials',
    				},
    				linkedException: 'It was not possible to delete the Modality, because it has links with Pendency'
    			}
    		},
    		modalitiesRegister: {
    			modality: 'modality',
    			title: 'Registration of modalities',
    			modalityName: 'Modality name',
    			modalityInitials: 'Modality initials',
    			modalityStatus: 'Modality status'
    		},

    		business: {
    			name: 'Business',
    			initials: 'Initials',
    			status: 'Status',
    			filter:{
    				name: 'Business',
    				initials: 'Initials',
    				active	: 'Status',
    				lastModifiedDate: 'Last Modification',
    				lastModifiedBy: {
    					fullName: 'Modified by'
    				}
    			},

    			alert: {
    				success: 'Successfully saved business!',
    				error: 'Error saving business!',
    				errorEmptyField: 'Fill in all required fields!',
    				errorDuplicateFieldName: 'The following field can not be duplicated: Business',
    				errorDuplicateFieldInitials: 'The following field can not be duplicated: Initials',
    				removeSuccess: 'Business successfully removed!',
    				removeError: 'Error delete business!',
    				confirmRemove: 'Do you really want to delete the business: ',
    				linkedException: 'It was not possible to delete the Business, because it has links with Pendency',
    			}
    		},

    		division: {
    			name: 'Division',
    			initials: 'Initials',
    			status: 'Status',
    			filter:{
    				name: 'Division',
    				initials: 'Initials',
    				active	: 'Status',
    				lastModifiedDate: 'Last Modification',
    				lastModifiedBy: {
    					fullName: 'Modified by'
    				}
    			},

    			alert: {
    				success: 'Successfully saved Division!',
    				error: 'Error saving Division!',
    				errorEmptyField: 'Fill in all required fields!',
    				errorDuplicateFieldName: 'The following field can not be duplicated: Division',
    				errorDuplicateFieldInitials: 'The following field can not be duplicated: Initials',
    				removeSuccess: 'Division successfully removed!',
    				removeError: 'Error delete Division!',
    				confirmRemove: 'Do you really want to delete the Division: ',
    				linkedException: 'It was not possible to delete the Division, because it has links with Pendency',
    			}
    		},
    		organization: {
    			organization : 'Organization',
    			regional : 'Regional',
    			street : 'Address',
    			number : 'Number',
    			complement: 'Complement',
    			district : 'District',
    			city : 'City',
    			state : 'State',
    			zipCode : 'Zip code',
    			phone : 'Phone',
    			type: 'Type',
    			initials: 'Initials',
    			status: 'ACTIVE',
    			name: 'Organization',
    			filter: {
    				name: 'Organization',
    				initials: 'Initials',
    				regional: 'Regional',
    				address: {
    					street: 'Street',
    					number: 'Number',
    					district: 'District',
    					city: 'City',
    					state: 'State',
    					zipCode: 'Zip Code',
    				},
    				active	: 'Status',
    				lastModifiedDate: 'Last Modification',
    				lastModifiedBy: {
    					fullName: 'Modified by'
    				},
    				phone: 'Phone'
    			},
    			alert: {
    				success: 'Organization successfully saved.',
    				error: 'Error saving Organization!',
    				emptyOrNullValueException: 'Please fill in the required fields.',
    				uniqueConstraintException: {
    					Name: 'The following field can not be duplicated: Organization',
    					Initials: 'The following field can not be duplicated: Initials',
    				},
    				linkedException: 'It was not possible to delete the Organization, because it has links with Pendency',
    				removeSuccess: 'Organization successfully removed!',
    				removeError: 'Error delete organization!',
    				confirmRemove: 'Do you really want to delete the organization: ',
    			}
    		},

    		demand : {
    			divisionType : 'Division',
    			division: 'Division',
    			demand : 'Demand',
    			initial : 'Initials',
    			deadline : 'Deadline',
    			status : 'Status',
    			lastUser : 'Last user',
    			lastModifiedDate : 'Last modified date',
    			addDivision : 'Add related division',
    			alert: 'Alert',
    			associatedDivision : 'Associated Divisions',
    			divisionSelect : 'Division',
    			filter : {
    				demandDesc	: 'Demand',
    				initials	: 'Initial',
    				active	: 'Status',
    				deadline: 'Deadline',
    				lastModifiedDate: 'Last Modification',
    				lastModifiedBy: {
    					fullName: 'Modified by'
    				},
    				division: {
    					name: 'Division',
    					initials: 'Initials Division'
    				}
    			},
    			alertPopUp: {
    				success: 'Demand successfully saved!',
    				emptyOrNullValueException: 'Please fill in the required fields.',
    				removeSuccess: 'Demand successfully removed!',
    				confirmRemove: 'Do you really want to delete the demand: ',
    				uniqueConstraintException: {
    					Demand: 'The following field can not be duplicated: Demand',
    					Initials: 'The following field can not be duplicated: Initials',
    				},
    				linkedException: 'It was not possible to delete the Demand, because it has links with Pendency'
    			}
    		},
    		
    		// Pendencia
    		pendency: {
    			id: 'Pendency',
    			summary: 'Summary',
    			alert: 'Alert',
    			client: 'Client',
    			business: 'Business Type',
    			division: 'Division',
    			modality: 'Modality',
    			demand: 'Demand',
    			desc: 'Description',
    			organization: 'Organization',
				process: 'Process',
				prevision: 'prevision',
    			deadline: 'Deadline',
    			responsible: 'Responsible',
    			extended: 'Extended',
    			alertPopUp: {
    				success: 'Pendência salva com sucesso!',
    				emptyOrNullValueException: 'Please fill in the required fields.',
    			},
				status : {
					status: 'Status',
					pending : 'Pending',
					completeTechnicalProduction: 'Complete Technical Production',
					technicalValidationCompleted: 'Technical Validation Completed',
					completedValidation: 'Completed Validation',
					completed: 'Completed',
					canceled: 'Canceled'
				},
				filter : {
					name: 'Pendency',
					summary: 'Summary',
					contact: {
								fullName: 'Client',
							},
					business:{
								name: 'Business Type'
							},
					division: {
								name: 'Division',
							},
					modality: {
								name: 'Modality'
					},
					demand: {
								demandDesc: 'Demand',
								deadline: 'Alert'
							},
					description: 'Description',
					organization: {
								name: 'Organization'
							},
					contract : {
								name: 'Contract'
							},
					process: 'Process',
					prevision: 'Prevision',
					status: 'Status',
					deadline: 'Deadline'
    			},
    			modal : {
    				summary: 'Summary',
    				initialDate: 'Start Date',
    				createdDate: 'Created in',
    				createdBy: 'Criado por',
    				intervalDate: 'Interval',
    				intervalTime: 'Time Interval',
    				dateFirstAction: 'Date of First Action',
    				highPriority: 'High Priority',
    				interval: {
    					days: 'Days',
    					months: 'Months',
    					years: 'Years'
    				},
    				wizard : {
    					page1 : {
    						title : 'Main',
    					},
    					page2 : {
    						title: 'Additional',
    					},
    				},
	    			pendencyAlert: {
	    				alert: 'Alert',
	    				priority: 'High Priority',
	    				extended: 'Extended',
	    				signifChange: 'Significant Change',
	    				techUnvbl: 'Technical Unavailability'
	    			},
    			}
    		},
    		
    		// common translates
    		common: {
    			insert: 'Insert',
    			update: 'Update',
    			delete: 'Delete',
    			edit: 'Edit',
    			showDetails : 'Show details',
    			confirmDelete : 'Delete confirmation',
    			lastModifiedDate: 'Last modification',
    			lastLogin: 'Modified by',
    			userLast : 'Last user',
    			dateLast : 'Last date',
    			filter: 'Filter',
    			isRequired: ' is required',
    			loading: 'Loading',
    			translatePt: 'Translate this page to portuguese',
    			translateEn: 'Translate this page to english',
    			noRecordsFound: 'No records found',
    			filtersApplied: 'FILTERS APPLIED',
    	        filterRemove:   'Filter remove',
    	        totalOfRecords : 'Total records: ',
    	        rowExpansion: 'Expand',
    	        phoneType: {
    	        	commercial: 'Commercial',
    	        	residential: 'Residential',
    	        	cellPhone: 'Cell Phone'
    	        },
    			filterSelect: {
    				0: 'No',
    				1: 'Yes'
    			},
    			active: {
    				vFalse: 'INACTIVE',
    				vTrue: 'ACTIVE',
    				0: 'INACTIVE',
    				1: 'ACTIVE'
    			},
    			tooltip: {
    				edit: 'Edit',
    				delete: 'Delete'
    			},
    			alert : {
    				messageRemove : 'You have selected to delete: ',
    				confirmRemove : 'If this was the action you wanted to do, please delete your choice, or cancel and return to the page'
    			},
    			actions: 'Actions'
    		},
    		button: {
    			save: 'Save',
    			update: 'Update',
    			finish: 'Finish',
    			cancel: 'Cancel',
    			edit: 'Edit',
    			delete: 'Delete',
    			draft: 'User as Draft',
    			filter: 'Filter by',
    			next: 'Next',
    			previous: 'Previous'
    		}
    	};


    function Translate($translateProvider) {
    	$translateProvider.translations('pt-br', ptBr);
        $translateProvider.translations('en-us', enUs);
        $translateProvider.preferredLanguage('pt-br');
        $translateProvider.useSanitizeValueStrategy('escaped');
    }

})();