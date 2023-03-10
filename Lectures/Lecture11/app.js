var app = angular.module("MsgApp", []);
app.controller("MsgController", ['$scope', MsgController]);

function MsgController($scope) {
  $scope.name = "Tommy";

  $scope.sayHello = function() {
    return "This is a test for Expression and Interpolation!";
  };
}
