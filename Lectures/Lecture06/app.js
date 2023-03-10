var app = angular.module("NameCalculator", []);
app.controller("NameCalculatorController", function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var temp = calculateNumericForString($scope.name);
    $scope.totalValue = temp;
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
});
