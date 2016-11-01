/**
 * Created by yuriy.lebedyev on 11/1/2016.
 */
(function() {
    'use strict';
    //x = "Hello";
    angular.module('myFirstApp', [])
        .controller("MyFirstController", function($scope) {
            $scope.name = "Yuriy";
            $scope.sayHello = function() {
                return 'Hello Yuriy func';
            }
        });

})();
