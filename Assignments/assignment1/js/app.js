var app = angular.module("LunchCheck", []);
app.controller("LunchCheckController", ['$scope', LunchCheckController]);

function LunchCheckController($scope) {
  $scope.text = "";
  $scope.message = "";
  $scope.totalMenuNum = 0;

  $scope.check = function () {
    var arr = $scope.text.split(",");
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].length !== 0) {
        console.log(arr[i]);
        $scope.totalMenuNum++;
      }
    }
    if($scope.totalMenuNum > 3) {
      $scope.message = "Too much!";
    } else {
      $scope.message = "Enjoy!";
    }
    $scope.totalMenuNum = 0;
  }
}
