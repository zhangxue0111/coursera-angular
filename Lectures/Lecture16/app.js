var app = angular.module("BindingApp", []);
app.controller("BindingController", BindingController);

BindingController.$inject = ["$scope"];

function BindingController($scope) {
  $scope.firstName = "Anna";

  $scope.showNumberOfWatchers = function () {
    console.log("log # of watchers : " , $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Ma";
  }

  $scope.logFirstName = function () {
    console.log("First name is : " + $scope.firstName);
  }

  $scope.logFullName = function () {
    console.log("Full name is : " + $scope.fullName);
  }



}
