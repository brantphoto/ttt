var ticTacToe = angular.module('ticTacToe', []);

ticTacToe.controller('tictacController', function ($scope) {

  $scope.pOneCombos = [];
  $scope.pTwoCombos = [];
  $scope.counterbaby = 1; //odd is player 1, even is player 2
  

  $scope.boardSizes = [
      { number:3 }, 
      { number:4 }, 
      { number:5 },
      { number:6 }, 
      { number:7 },
      { number: 15},
      { number: 25},
      { number: 50},
      { number: 75},
      { number: 100},
      { number: 200}
    ];

  $scope.finalBoardSize = $scope.boardSizes[0];

  $scope.possibleWinConditions = [0];

  $scope.finalWinConditions = $scope.possibleWinConditions[0];

  $scope.lockSize = function(array) {
    x = array
    $scope.possibleWinConditions = x
    element = document.getElementById(element);
  };

  /* 

    $scope.lockSizeButton = function() {
    console.log($scope.lockSize($scope.finalBoardSize.availWinLengths));
  };

   $scope.tester2 = function() {
    console.log($scope.possibleWinConditions);
  };
  
  */

  $scope.isOdd = function(value) {
  return (value%2 != 0);
  };

  $scope.whichArray = function(tile) {
    if (tile.playerOneOwns == true) {
      return $scope.pOneCombos;
    } else if (tile.playerTwoOwns == true) {
      return $scope.pTwoCombos;
    }
  };

	$scope.boardInit = function(e) {

    console.log="buttontest";
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
            boardSize2:false,
            boardSize3:false, 
            boardSize4:false,
            boardsize5:false,
            boardsize6:false
          }
        );
      }
      
      $scope.board.push(row);
    }
  };

$scope.chooseTileSize = function(tile, boardsize) {
  if (boardsize > 10) {
    tile.boardSize2 = true
  } else if (boardsize > 9  && boardsize < 20) {
      tile.boardsize3 = true;
  } else if (boardsize > 50 && boardsize < 100 ) {
      tile.boardsize3 = true;
  } else if (boardsize > 99 && boardsize < 200) {
    tile.boardsize4 = true;
  }
};





  //$scope.boardInit($scope.finalBoardSize);

  $scope.tileMark = function(tile) {

    if (tile.active == false) {
      if ($scope.isOdd($scope.counterbaby)) {
          tile.active = true;
          tile.playerOneOwns = true;
          tile.mark = 'X';
          $scope.pOneCombos.push([tile.x,tile.y]);
          console.log($scope.pOneCombos);
          $scope.counterbaby++;
      } else {
          tile.active = true;
          tile.playerTwoOwns = true;
          tile.mark = 'X';
          $scope.pTwoCombos.push([tile.x,tile.y]);
          console.log($scope.pTwoCombos);
          $scope.counterbaby++;
      }
    } else {
      alert('Don\'ts do it, Bro');
    }    
  };


// these timers needed to be set to 1 to include piece clicked on. -Brant

$scope.wc = 4;
$scope.arraydir = [[-1,-1, 0], [1,1, 0], [0,1, 1], [0,-1, 1], [1,-1, 2], [-1,1, 2], [-1,0, 3], [1,0, 3]];
$scope.directionarray = [1,1,1,1];
$scope.testArray = [[9,9], [11, 11], [10, 11], [10, 9], [11, 9], [9, 11], [9, 10], [11, 10] ];



// Needed to reset counters after each click turn. -Brant
$scope.clickingBox = function(array, x, y) {
  $scope.pointDirection(array, x, y, $scope.arraydir);
  $scope.checkForWin($scope.directionarray);
  console.log($scope.directionarray);
  $scope.directionarray = [1,1,1,1];

};

$scope.pointDirection = function (array, x, y, arraydir) {
    $scope.searchDirectionLoop(array, x, y, arraydir[0]);
    $scope.searchDirectionLoop(array, x, y, arraydir[1]);
    $scope.searchDirectionLoop(array, x, y, arraydir[2]);
    $scope.searchDirectionLoop(array, x, y, arraydir[3]);
    $scope.searchDirectionLoop(array, x, y, arraydir[4]);
    $scope.searchDirectionLoop(array, x, y, arraydir[5]);
    $scope.searchDirectionLoop(array, x, y, arraydir[6]);
    $scope.searchDirectionLoop(array, x, y, arraydir[7]);
};


  $scope.searchDirectionLoop = function (array, x, y, direction) {
    for (i = 0; i < array.length; i++) {
      if (array[i][0] === x + direction[0] && array[i][1] === y + direction[1]) {
        ++$scope.directionarray[direction[2]];
        a = array[i][0];
        b = array[i][1];
        console.log("new coordinates:" + a + b );
        $scope.searchDirectionLoop(array, a, b, direction);
      } else {
        console.log("moved on to Next Loop");
      }   
    }
  };

// $scope.testArray = [[2,4], [1,4]]; // [[2,3], [1,2], [3,3], [3,2], [4,3], [5,2]];


$scope.checkForWin = function(directionarray) {
  for (i = 0; i < directionarray.length; i++) {
    if (directionarray[i] == $scope.wc && $scope.isOdd($scope.counterbaby) == true) { 
      alert("Player Two Wins!");
    } else if (directionarray[i] == $scope.wc && $scope.isOdd($scope.counterbaby) == false) { 
      alert("Player One Wins!");
    } else if ($scope.counterbaby === ($scope.finalBoardSize.number * $scope.finalBoardSize.number) + 1) {
      alert("It's a tie!")
    }
  }
};






});




