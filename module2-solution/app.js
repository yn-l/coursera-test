(function () {
    'use strict';

    var shoppingList1 = [
        { name: "Milk", quantity: 10 },
        { name: "Donuts", quantity: 12 },
        { name: "Cookies", quantity: 8 },
        { name: "Chocolate", quantity: 7 },
        { name: "Peanut Butter", quantity: 11 },
        { name: "Pepto Bismol", quantity: 14 }
    ];

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController )
        .controller('AlreadyBoughtController', AlreadyBoughtController )
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        ;

    ToBuyController.$inhect = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.items =  ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function(itemIndex) {
            console.log("Buy itemIndex is ", itemIndex)
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
        toBuyCtrl.isEmpty = function() {
            return ShoppingListCheckOffService.getToBuyItems().length == 0;
        }
    }

    AlreadyBoughtController.$inhect = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bougthCtrl = this;

        bougthCtrl.items =  ShoppingListCheckOffService.getBoughtItems();
        bougthCtrl.isEmpty = function() {
            return ShoppingListCheckOffService.getBoughtItems().length == 0;
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;
        service.toBuyItems = shoppingList1;
        service.boughtItems = [];

        service.buyItem = function(itemIndex) {
            console.log("itemIndex = ", itemIndex);
            var item = service.toBuyItems[itemIndex];
            service.addItem(service.boughtItems, item)
            service.removeItem(service.toBuyItems, itemIndex);
        };
        service.addItem = function(array, item) {
            array.push(item);
        };
        service.removeItem = function(array, itemIndex) {
            array.splice(itemIndex, 1);
        };
        service.getBoughtItems = function() {
          return service.boughtItems;
        };
        service.getToBuyItems = function() {
            return  service.toBuyItems;
        };
    }

})();
