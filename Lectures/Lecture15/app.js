var app = angular.module("CounterApp", []);
app.controller("CounterController", CounterController);

CounterController.$inject = ["$scope", "$timeout"];

function CounterController($scope, $timeout) {

  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("Counter Incremented!");
    }, 2000);
  }
  // method 2 : wrap codes into the $apply
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //       console.log("Counter Incremented!");
  //     })
  //   }, 2000)
  // }
  // method 1 : call digest after your custom code
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("Counter Incremented!");
  //     $scope.$digest();
  //   }, 2000)
  // }

}
