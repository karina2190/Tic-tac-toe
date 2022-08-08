var numberOfMoves = 1;
const counts = {};
const matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var winner = "?";


function changeImage(photoId) {
    if (counts[photoId] != 1 && winner == "?")  {
        if (numberOfMoves % 2 != 0) {
            document.getElementById(photoId).src = "x.jpg";
            createMatrix(1, photoId);
        } else {
            document.getElementById(photoId).src = "zero.jpg";
            createMatrix(2, photoId);
        }
        ++numberOfMoves;
        counts[photoId] = 1;
        gameOver();
    }
}

function createMatrix(x, imageId) {
    if (imageId == 1) {
        matrix[0][0] = x;
    } else if (imageId == 2) {
        matrix[0][1] = x;
    } else if (imageId == 3) {
        matrix[0][2] = x;
    } else if (imageId == 4) {
        matrix[1][0] = x;
    } else if (imageId == 5) {
        matrix[1][1] = x;
    } else if (imageId == 6) {
         matrix[1][2] = x;
    } else if (imageId == 7) {
        matrix[2][0] = x;
    } else if (imageId == 8) {
        matrix[2][1] = x;
    } else {
        matrix[2][2] = x;
    }
}

function gameOver() {
    return possibleWinner(matrix[0][0], matrix[0][1], matrix[0][2]) 
       ||  possibleWinner(matrix[1][0], matrix[1][1], matrix[1][2]) 
       ||  possibleWinner(matrix[2][0], matrix[2][1], matrix[2][2]) 
       ||  possibleWinner(matrix[0][0], matrix[1][0], matrix[2][0]) 
       ||  possibleWinner(matrix[0][1], matrix[1][1], matrix[2][1]) 
       ||  possibleWinner(matrix[0][2], matrix[1][2], matrix[2][2]) 
       ||  possibleWinner(matrix[0][0], matrix[1][1], matrix[2][2]) 
       ||  possibleWinner(matrix[2][0], matrix[1][1], matrix[0][2])
       ||  draw(); 
}

function possibleWinner(element1, element2, element3) {
    if (element1 == -1 || element1 != element2 || element1 != element3) {
        return false;
    }
    checkWinner(element1);
    return true;
}

function draw() {
    for (var i = 0; i < 3; ++i) {
      for (var j = 0; j < 3; ++j) {
        if (matrix[i][j] == -1) {
            return false;
        }
      }
    }
    document.getElementById("paragraph").innerHTML = "No winner";
    return true;
}

function checkWinner(x) {
    if (x == 1) {
        winner = "X";
    } else {
        winner = "0";
    }
    document.getElementById("paragraph").innerHTML = "The winner is: " + winner;
}