(function () {
	angular
		.module('sgp')
		.factory('PaginationService', PaginationService);

	function PaginationService() {
		var arrayPages = [];

		var options;

		var data = {};
		var listSortItens = null;

		var itemsCallBack = null;

		var config = function (opt) {
			createOptions();
			Object.keys(opt).forEach(function (key) {
				options[key] = opt[key];
			});
		};
		
		function createOptions(){
			options = {
				page: 1,
				size: 10,
				sort: null
			};
		}
		
		var setListSortItens = function(sortItens){
			listSortItens = sortItens;
		}
		
		var getListSortItens = function() {
			return listSortItens;
		}

		var setSortColumn = function (value) {
    		for (var key in listSortItens) {
				if (key != value) {
					listSortItens[key] = true;
				}
		    }
    		listSortItens[value] = !listSortItens[value];
    		
			var _sort = options.sort.split(",");
			if (_sort[0] == value) {
				options.sort = value + "," + sortDirection(_sort[1]);
			} else {
				options.sort = value + ",DESC";
			}
			//Restart page
			options.page = 1;
			itemsCallBack(angular.copy(options)).then(requestSuccessHandler);
		}

		var sortDirection = function (_order) {
			return angular.uppercase(_order) == 'ASC' ? 'DESC' : 'ASC';
		}
		
		//Apply filter
		var applyFilter = function (elementFilter) {
			data = {};
			//Add the element filter that will be pass to controller (java)
			var objFilter = Object.keys(elementFilter)[0];
			options[objFilter] = elementFilter[objFilter];

			//Restart page
			options.page = 1;
			itemsCallBack(angular.copy(options)).then(requestSuccessHandler);
		}
		
		//Remove field from filter
		var removeFilter = function (field) {
			//Remove field from filter
			delete options[field];
			options.page = 1;
			itemsCallBack(angular.copy(options)).then(requestSuccessHandler);
		}

		var setLoadDataCallBack = function (cb) {
			itemsCallBack = cb;
		}

		var hasNext = function () {
			return !data.last;
		};

		var hasPrevious = function () {
			return !data.first;
		};

		var requestSuccessHandler = function (response) {
			data = response.data;
			calcPages();
		};

		var start = function () {
			data = {};
			listSortItens = {};
			options.page = 1;
			itemsCallBack(angular.copy(options)).then(requestSuccessHandler);

		};

		var next = function () {
			if (hasNext()) {
				options.page++;
				itemsCallBack(angular.copy(options)).then(requestSuccessHandler, function (response) {
					options.page--;
				});
			}
		};

		var previous = function () {
			if (hasPrevious()) {
				options.page--;
				itemsCallBack(angular.copy(options)).then(requestSuccessHandler, function (response) {
					options.page++;
				});
			}
		};

		var page = function (pageIndex) {
			options.page = pageIndex;
			itemsCallBack(angular.copy(options)).then(requestSuccessHandler, function (response) {
				options.page++;
			});
		};

		var totalPages = function () {
			if (data.totalPages) {
				return new Array(data.totalPages);
			}
			return [];
		};

		var getPages = function () {
			return arrayPages;
		};

		var calcPages = function () {
			arrayPages = [];

			addPreviousPages();
			arrayPages.push(options.page);
			addNextPages();
		};

		var addPreviousPages = function () {
			for (n = 3; n > 0; n--) {
				if ((options.page - n) > 0) {
					arrayPages.push(options.page - n);
				}
			}
		};

		var addNextPages = function () {
			for (i = 1; i < 4; i++) {
				if ((options.page + i) <= data.totalPages) {
					arrayPages.push(options.page + i);
				}
			}
		};

		var getItems = function () {
			return data.content;
		};

		var isPageActive = function (pageIndex) {
			return pageIndex == options.page;
		};

		var totalOfRecords = function () {
			return data.totalElements;
		};

		return {
			config: config,
			start: start,
			next: next,
			previous: previous,
			items: getItems,
			totalPages: totalPages,
			getPages: getPages,
			isPageActive: isPageActive,
			hasNext: hasNext,
			hasPrevious: hasPrevious,
			totalOfRecords: totalOfRecords,
			setLoadDataCallBack: setLoadDataCallBack,
			page: page,
			itemsCallBack: itemsCallBack,
			setSortColumn: setSortColumn,
			applyFilter: applyFilter,
			removeFilter: removeFilter,
			setListSortItens: setListSortItens,
			getListSortItens: getListSortItens,
			options: function () {
				return options;
			},
			resetData: function () {
				data = {};
			}
		};
	};

	PaginationService.$inject = [];
})();
