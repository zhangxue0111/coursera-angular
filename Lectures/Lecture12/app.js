var app = angular.module("MsgApp", []);
app.controller("MsgController", ['$scope', "$filter", MsgController]);

function MsgController($scope, $filter) {
  $scope.name = "GIVE ME COOKIES NOW!";
  $scope.value = 0.23;
  $scope.sayHello = function() {
      var output = $filter("lowercase");
      return output($scope.name);

  };
}
