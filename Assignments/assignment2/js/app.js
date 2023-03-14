var app = angular.module("ShoppingListCheckOff", []);
app.controller("ToBuyController", ToBuyController);
app.controller("AlreadyBoughtController", AlreadyBoughtController);
app.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"]
function ToBuyController(ShoppingListCheckOffService) {
  list1 = this;
  list1.items = ShoppingListCheckOffService.getToBuyItems();

  list1.removeToBuyItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]
function AlreadyBoughtController(ShoppingListCheckOffService) {
  list2 = this;
  list2.items = ShoppingListCheckOffService.getAlreadyBuyItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "20"
    },
    {
      name: "Cookies",
      quantity: "30"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Broccoli",
      quantity: "2"
    },
    {
      name: "Peanut Butter",
      quantity: "10"
    }
  ];

  var alreadyBuy = [];

  service.removeToBuyItem = function (itemIndex) {
    var boughtItem = toBuyList.splice(itemIndex, 1);
    // console.log("boughtItem = ", boughtItem);
    var item = {
      name: boughtItem[0].name,
      quantity: boughtItem[0].quantity
    }
    // console.log("item = ", item);
    alreadyBuy.push(item);
    // console.log("alreadyBuy = ", alreadyBuy);
  }

  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.getAlreadyBuyItems = function () {
    return alreadyBuy;
  }
}
