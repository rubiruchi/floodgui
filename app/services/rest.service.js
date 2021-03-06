'use strict';

angular.module('rest.service', ['ngResource'])

    .factory('Test', ['$resource', function ($resource) {
        return function (ip) {
            return $resource(ip, {}, {
                query: {
                    method: 'GET',
                    timeout: 5000
                }
            });
        }
    }])

    .factory('restService', ['$resource', 'storageService', function ($resource, storageService) {
        return {
            getMemory: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/memory/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getApiHealth: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/health/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getVersion: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/version/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getUptime: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/system/uptime/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getFirewallStatus: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/firewall/module/status/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getSummary: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/controller/summary/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            getSwitches: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/controller/switches/json', {}, {
                    query: {
                        method: 'GET',
                        isArray: true,
                        timeout: 5000
                    }
                });
            },
            getDevices: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/device/', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    },
                    stripTrailingSlashes: false
                });
            },
            getPorts: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/core/switch/all/port-desc/json', {}, {
                    query: {
                        method: 'GET',
                        isArray: false,
                        timeout: 5000
                    }
                });
            },
            getPortsStats: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/statistics/bandwidth/:switchID/all/json', {}, {
                    query: {
                        method: 'GET',
                        isArray: true,
                        params: {
                            switchID: '@switchID'
                        },
                        timeout: 5000
                    }
                });
            },
            getPortsState: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/portblocker/list/json', {}, {
                    query: {
                        method: 'GET',
                        timeout: 5000
                    }
                });
            },
            disablePort: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/portblocker/disable/json', {}, {
                    save: {
                        method: 'POST'
                    }
                });
            },
            enablePort: function () {
                return $resource('http://' + storageService.getLocation() + ':8080/wm/portblocker/enable/json', {}, {
                    save: {
                        method: 'POST'
                    }
                });
            }
        }
    }])
    .config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);