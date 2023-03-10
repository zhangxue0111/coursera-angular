var app = angular.module("ShoppingListApp", []);
app.controller("ShoppingListAddController", ShoppingListAddController);
app.controller("ShoppingListShowController", ShoppingListShowController);
app.service("ShoppingListService", ShoppingListService)


ShoppingListAddController.$inject = ["ShoppingListService"];
function ShoppingListAddController(ShoppingListService) {
  var itemAdd = this;
  itemAdd.itemName = "";
  itemAdd.itemQuantity = "";

  itemAdd.addItem = function () {
    ShoppingListService.addItem(itemAdd.itemName, itemAdd.itemQuantity);
  }
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  }
}


function ShoppingListService() {
  var service = this;
  // List of shopping items
  var items = [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  }

  service.getItems = function () {
    return items;
  };
}
