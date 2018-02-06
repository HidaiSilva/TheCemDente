(function () {
	angular
		.module('sgp')
		.controller('HeaderCtrl', ['$scope', '$rootScope', '$translate', 'toastr', 'CrudService', 'Idle', '$location', '$uibModal', '$uibModalStack',
			function ($scope, $rootScope, $translate, toastr, CrudService, Idle, $location, $uibModal, $uibModalStack) {

				//$scope.actualUser = JSON.parse(sessionStorage.user);

				$scope.currentUser = undefined;

				$scope.logout = function () {
					CrudService.login.logout()
						.then(function (response) {
							sessionStorage.setItem('token', undefined);
							sessionStorage.setItem('user', undefined);
							$location.path("login");
						}
						).catch(function () {
							console.log('Logout error');
						}
						);
				};

				$scope.hasUser = function () {
					return sessionStorage.user !== "undefined";
				};

				$scope.language = 'en-us';
				$scope.changeLang = function (lang) {
					$scope.language = lang;
					$translate.use(lang);
				};

				// $scope.flattenValue = function (obj, path) {
				// 	var pathSplited = path.split('.');
				// 	var firstPath = _.pullAt(pathSplited, 0)[0];

				// 	if (_.isUndefined(obj[firstPath]) || _.isNull(obj[firstPath])) {
				// 		return '';
				// 	}

				// 	var objAux = obj[firstPath];
				// 	if (_.isEmpty(pathSplited)) {
				// 		return objAux.toString();
				// 	} else {
				// 		var pathAux = _(pathSplited).join('.');
				// 		if (objAux.constructor === Array) {
				// 			var valueStr = '';

				// 			for (var i = 0; i < objAux.length; i++) {
				// 				valueStr = valueStr + $scope.flattenValue(objAux[i], pathAux);
				// 			}

				// 			return valueStr;
				// 		} else {
				// 			return $scope.flattenValue(objAux, pathAux);
				// 		}
				// 	}
				// };

				// $scope.anyAttrContains = function (obj, attrs, text) {
				// 	var textToLower = text.toLowerCase();

				// 	for (var i = 0; i < attrs.length; i++) {
				// 		var compareText = $scope.flattenValue(obj, attrs[i]);
				// 		if (_.includes(compareText.toLowerCase(), textToLower)) {
				// 			return true;
				// 		}
				// 	}

				// 	return false;
				// };


				$(function () {
					var url = window.location.href.split("/")[3];
				url = url.replace("#", ""), $("#sidebar li a").map(function () {
					$(this).attr("href") === url && ($(this).addClass("active").closest(".sidebar-submenu").collapse("show"), $(this).closest(".sidebar-dropdown").find(".sidebar-link").addClass("active"));
				});
				var sidebarLinks = $("#sidebar .sidebar-submenu-link, #sidebar .sidebar-submenu-link, .header-logo"), sidebarLinksClass = $("#sidebar .sidebar-link, #sidebar .sidebar-submenu-link");
				sidebarLinks.click(function () {
					sidebarLinksClass.removeClass("active"), $(this).addClass("active").closest(".sidebar-submenu").collapse("show"), $(this).closest(".sidebar-dropdown").find(".sidebar-link").addClass("active")
				}), 
				$(document).ready(function () {
					$(".sidebar-overlay").click(function () {
						$(".sidebar-overlay").fadeOut(), $("#sidebar").removeClass("active"), $(".navbar-toggle").removeClass("active"), $("body").removeClass("sidebar-collapse-active")
					}), 
					$(".btn-sidebar-collapse").click(function (s) {
						s.preventDefault(), $(this).toggleClass("active"), $("body").toggleClass("sidebar-collapse-active"), $("#sidebar").toggleClass("active"), $(".sidebar-overlay").fadeToggle()
					}), 
					$("#sidebar").mouseover(function () {
						$(this).hasClass("active") ? $(this).addClass("sidebar-collapse-hover") : $(this).removeClass("sidebar-collapse-hover")
					}).mouseout(function () {
						$(this).removeClass("sidebar-collapse-hover")
						})
				});
				
				$('ul[id*="sidebar-"]').on('show.bs.collapse', function() {
					$('ul[id*="sidebar-"][id!="' + $(this).attr('id') + '"]').collapse('hide');
				});
				$('.header-logo').click(function() {
					$('ul[id*="sidebar-"][id!="' + $(this).attr('id') + '"]').collapse('hide');
				});
				$('.br-flag').click(function(){
					$('#actual-language').removeClass('eua-flag').addClass('pt-br-flag');
				});
				$('.en-flag').click(function(){
					$('#actual-language').removeClass('pt-br-flag').addClass('eua-flag');
				});

				});

			}]);
})();


