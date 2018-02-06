(function () {
	angular
		.module('sgp')
        .service('RestService', ['$http', '$sce', 'LoggerService', function restUtil($http, $sce, LoggerService) {

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };

        // var token = {
        //     headers: {
        //         "Authorization": tokenValue
        //     }
        // }

        var configJson = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        };

        var configFile = {
            headers: {
                enctype: 'multipart/form-data'
            }
        };

        var configExport = {
            responseType: 'arraybuffer'
        };

        var logSuccess = function (type, data) {
            LoggerService.debug(' -> SUCCESS with:');
            LoggerService.debug(data);
            LoggerService.debug('END ' + type);
        };

        var logError = function (type, data) {
            LoggerService.debug(' -> ERROR with:');
            LoggerService.debug(data);
            LoggerService.debug('END ' + type);
        };

        var CustomError = function (status) {
            throw {
                name: 'CustomError',
                message: 'Falha ao conectar no servidor: ' + status
            };
        };

        return {
            post: function (url, params) {
                var dados = $http
                    .post(url, params, configJson)
                    .then(function (data, status, headers, config) {
                        return data;
                    }, function (data, status, headers, config) {
                        throw { 'objeto': data, 'status': status };
                    });
                return dados;
            },
            put: function (url, params) {
                var dados = $http
                    .put(url, params, this.config)
                    .then(function (data, status, headers, config) {
                        return data;
                    }).catch(function (data, status, headers, config) {
                        return data.message;
                    });
                return dados;
            },
            delete: function (url, params) {

                var dados = $http
                    .delete(url, params, this.config)
                    .then(function (data, status, headers, config) {
                        return data;
                    }).catch(function (data, status, headers, config) {
                        throw { 'objeto': data, 'status': status };
                    });
                return dados;
            },
            postJson: function (url, params) {
                var dados = $http
                    .post(url, params, this.configJson)
                    .then(function (data, status, headers, config) {
                        return data;
                    }).catch(function (data, status, headers, config) {
                        return data.message;
                    });
                return dados;
            },
            postFile: function (url, file) {
                var dados = $http
                    .post(url, file, this.configFile)
                    .then(function (data, status, headers, config) {
                        return data;
                    }).catch(function (data, status, headers, config) {
                        if (status !== 500)
                            return data.message;
                        else
                            throw CustomError(status);
                    });
                return dados;
            },
            get: function (url) {
                var dados = $http
                    .get(url, this.config)
                    .then(function (data, status, headers, config) {
                        return data;
                    }).catch(function (data, status, headers, config) {
                        if (status !== 500)
                            return data.message;
                        else
                            throw CustomError(status);
                    });
                return dados;
            },
            getWithParams: function (url, params) {
                params.page = params.page > 0 ? params.page - 1 : 0;
                return $http({
                    method: 'GET',
                    url: url,
                    params: params
                });
            },
            exportDoc: function (url, data) {
                return $http
                    .post(url, data, this.configExport)
                    .then(
                    function (data, status, headers, config) {
                        var blob = new Blob([data], { type: 'application/pdf' });
                        var objectUrl = URL.createObjectURL(blob);
                        window.open(objectUrl, "_blank");
                    }).catch(
                    function (data, status) {
                        console.log('Request failed with status: ' + status);
                        return data;
                    }
                    );
            },
            download: function (url, data) {
                return $http
                    .post(url, data, this.configExport)
                    .then(
                    function (data, status, headers, config) {
                        return data;
                    }).catch(
                    function (data, status) {
                        return data;
                    }
                    );
            },
            test: function (str) {
                return str;
            }
        };
    }]);

})();