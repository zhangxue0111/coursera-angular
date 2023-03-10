var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var app = angular.module("ShoppingListApp", []);
app.controller("ShoppingListController", ShoppingListController);

ShoppingListController.$inject = ["$scope"];

function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;

}
