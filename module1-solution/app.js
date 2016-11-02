/**
 * Created by yuriy.lebedyev on 11/1/2016.
 */
(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller("LunchCheckController", CalculatorController);

    CalculatorController.$inject = ['$scope'];
    function CalculatorController($scope) {
        $scope.message = '';

        $scope.itemCalculatorFunc = function () {
            var countOfItems = calculateCountOfItemInString($scope.items);
            $scope.message = getMessage(countOfItems);
        }
    }

    function calculateCountOfItemInString(string) {
        if(!string) return 0;
        var aItems = string.split(',');
        var count = 0;
        for(var i = 0; i < aItems.length; i++){
            if(aItems[i].trim().length > 0) count++;
        }
        return count;
    }
    function getMessage(countItems) {
        var msg = 'Please enter data first';
        if(countItems >=1 && countItems <= 3) {
            msg = 'Enjoy!';
        } else if(countItems > 3) {
            msg = 'Too much!';
        }
        return msg;
    }
})();
