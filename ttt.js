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
      } else {
          tile.active = true;
          tile.playerTwoOwns = true;
          tile.mark = 'X';
          $scope.pTwoCombos.push(tile.x,tile.y);
          console.log($scope.pTwoCombos);
          $scope.counterbaby++;
      }
    } else {
      alert('Don\'t do it, Bro');
    }    
  };

})
