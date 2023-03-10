var app = angular.module("CounterApp", []);
app.controller("CounterController", CounterController);

CounterController.$inject = ["$scope"];

function CounterController($scope) {
  $scope.showNumberOfWatchers = function () {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    console.log("# of Watchers: ", $scope.$$watchersCount);
  }

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  }

  $scope.$watch(function () {
    console.log("Digest Loop Failed!");
  })
}
