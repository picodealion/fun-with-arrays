(function() {

    'use strict';

    angular.module('app')
        .factory('dataService', DataService);

    DataService.$inject = ['$http'];

    function DataService ($http) {

        'use strict';

        return {
            get: getData
        };

        function getData(name) {
            return $http.get('./data/' + name + '.json')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    throw new Error('Unable to fetch data: ' + error.statusText);
                });
        }
    }

})();