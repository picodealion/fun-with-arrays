(function () {

    'use strict';

    // the _ in the controller name is just to make sure the application
    // doesn't accidentally use this controller and already fill in the solutions
    angular.module('app')
        .controller('_case1Controller', Case1Controller);

    Case1Controller.$inject = ['$scope', 'colors'];

    function Case1Controller($scope, colors) {

        // Output the raw data to help you debug :)
        $scope.rawdata = colors;


        // Modify this to return each color in uppercase
        $scope.colorsUppercase = colors.map(function (color) {
            return color.toUpperCase();
        });


        // Modify this to double each color name
        // (don't forget there's a helper function "doubleString" below)
        $scope.colorsDouble = colors.map(doubleString);


        // Modify this to turn each color name into an object with the properties
        // "name" and "length"
        $scope.colorLengths = colors.map(function (color) {
            return {
                name: color,
                length: color.length
            };
        });
    }


    function doubleString(str) {
        return str + str;
    }

})();