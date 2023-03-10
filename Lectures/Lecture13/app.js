var app = angular.module("MsgApp", []);
app.controller("MsgController", MsgController)
.filter("test", TestFilter);

MsgController.$inject = ["$scope", "testFilter"]

function MsgController($scope, testFilter) {

  $scope.sayHello = function() {
    return "This is a test for Expression and Interpolation!";
  };

  $scope.sayTest = function () {
    var msg= "This is a test for Expression and Interpolation!";
    msg = testFilter(msg);
    return msg;
  }
}

// need to return a function
function TestFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("test", "demo");
    return input;
  };
}
