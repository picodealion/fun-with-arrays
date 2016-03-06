(function() {

    angular
        .module('app')
        .controller('checkSolutionController', CheckSolutionController);

    CheckSolutionController.$inject = ['$scope', '$element'];

    function CheckSolutionController($scope, $element) {
        var checksums = {
            colorsUppercase: 305671123,
            colorsDouble: 306454031,
            colorLengths: 308465390,
            chronological: 369639269,
            favorites: 307386920,
            bad: 308216905
        };

        console.log($scope.data, $scope.name, checksum($scope.data), checksums[$scope.name]);

        if(checksum($scope.data) === checksums[$scope.name]) {
            $element.addClass('solved');
        }
    }

    function checksum(data) {
        var i,
            chk = 0x12345678,
            s = JSON.stringify(data) || '';

        for (i = 0; i < s.length; i++) {
            chk += (s.charCodeAt(i) * (i + 1));
        }

        return chk;
    }

})();