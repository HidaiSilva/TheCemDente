(function () {
	angular
		.module('sgp')
		.service('CrudService', ['RestService', function (rest) {

			const url = "http://localhost:8080";
			// const url = "http://172.16.2.2:8080";

			return {
				user: {
					findAll: function (filterData) {
						return rest.get('/sgp/user/?' + filterData);
					},
					save: function (user) {
						return rest.post('/sgp/user', user);
					},
					findOne: function (id) {
						return rest.get('/sgp/user/' + id);
					},
					delete: function (id) {
						return rest.delete('/sgp/user/' + id);
					},
					change: function (user) {
						return rest.post('/sgp/user/change-password', user);
					}
				},
				login: {
					logon: function (user) {
						return rest.post(url + '/theCemDente/login', user);
					},
					forget: function (user) {
						return rest.post('/sgp/login/forgot-password', user);
					},
					change: function (user) {
						return rest.post('/sgp/login/change-password', user);
					},
					logout: function () {
						return rest.get('/sgp/login/logout');
					},
					userAuthenticated: function () {
						return rest.get('/sgp/login/userAuthenticated');
					}
				},
				paciente: {
					findAll : function(){
						return rest.get(url + '/theCemDente/paciente/getall')
					},
					save: function (paciente) {
						return rest.post(url + '/theCemDente/paciente/savePaciente/', paciente);
					},
					delete: function (id) {
						return rest.delete(url + '/theCemDente/paciente/deletePaciente/' + id);
					}
				},
				patologia: {
					findAll : function(){
						return rest.get(url + '/theCemDente/patologia/getall')
					},
					save: function (paciente) {
						return rest.post(url + '/theCemDente/patologia/savePaciente/', paciente);
					},
					delete: function (id) {
						return rest.delete(url + '/theCemDente/patologia/deletePaciente/' + id);
					}
				},
			};
		}]);
})();