var app = angular.module("DIApp", []);
app.controller("DIController", DIController);

function DIController($scope, $filter) {
  $scope.name = "Tommy";

  $scope.upper = function() {
    var upperCase = $filter("uppercase");
    $scope.name = upperCase($scope.name);
  }
}
