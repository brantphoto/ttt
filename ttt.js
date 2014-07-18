var ticTacToe = angular.module('ticTacToe', []);

ticTacToe.controller('tictacController', function ($scope) {

  $scope.pOneCombos = [];
  $scope.pTwoCombos = [];
  $scope.counterbaby = 1;

  $scope.isOdd = function(value) {
  return (value%2 != 0);
  };

	$scope.boardInit = function(e) {

    $scope.board = [];
    
    for (var i = 0 ; i < e; i++) {
      
      var row = [];
      
      for (var j = 0; j < e; j++) {
        
        row.push(
          {
            x: (j + 1),
            y: (i + 1),
            mark: null,
            active: false,
            playerOneOwns: false,
            playerTwoOwns: false,
          }
        );
      }
      
      $scope.board.push(row);
    }
  };

  $scope.boardInit(6);

  $scope.tileMark = function(tile) {

    if (tile.active == false) {
      if ($scope.isOdd($scope.counterbaby)) {
          tile.active = true;
          tile.playerOneOwns = true;
          tile.mark = 'X';
          $scope.pOneCombos.push(tile.x,tile.y);
          console.log($scope.pOneCombos);
          $scope.counterbaby++;
          $scope.checkForWin(tile.x,tile.y);
      } else {
          tile.active = true;
          tile.playerTwoOwns = true;
          tile.mark = 'X';
          $scope.pTwoCombos.push([tile.x,tile.y]);
          console.log($scope.pTwoCombos);
          $scope.counterbaby++;
          $scope.checkForWin(tile.x,tile.y);
      }
    } else {
      alert('Don\'t do it, Bro');
    }    
  };

$scope.checkForWin = function(x,y) {
  console.log("Testing to see " + x + " and " + y);

};


$scope.counterOneZeroFive = 0;

$scope.directionOne = function(array, x, y) {
  $scope.forLooper1(array, x, y);
  $scope.directionTwo(array, x, y);
};

$scope.forLooper1 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] == x - 1 && array[i][1] == y - 1) {
        $scope.counterOneZeroFive++;
        console.log("counter is: " + $scope.counterOneZeroFive );
        a = array[i][0];
        b = array[i][1];
        console.log("coordinates to feed:" + x + y); 
        $scope.forLooper1(array, a, b);
      } else {
        console.log("shit aint working");
      }
    }
  };

$scope.directionTwo = function(array, x, y) {
  $scope.forLooper2(array, x, y);
  $scope.directionThree(array, x, y);
};

$scope.forLooper2 = function(array, x, y) {
    for (i = 0; i < array.length; i++) {
      if (i == x , y - 1) {
        console.log(x + " " + y + " before redef");
        y = y - 1;
        console.log(x + " " + y + " after redef"); 
        $scope.forLooper2(array, x, y);
      } else {
      console.log("shit aint working");
      }
    }
  };

$scope.directionThree = function(array, x, y) {
  console.log(array + x + y);
};



$scope.testArray = [[2,3], [1,2], [3,3], [3,2]];

});


