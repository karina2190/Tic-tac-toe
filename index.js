var numberOfMoves = 1, ok1 = 0, ok2 = 0, ok3 = 0, ok4 = 0, ok5 = 0, ok6 = 0, ok7 = 0, ok8 = 0, ok9 = 0;
const matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var winner = "?";


function changeImage1() {
    if (ok1 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("00").src = "x.jpg";
            matrix[0][0] = 1;
        } else {
            document.getElementById("00").src = "zero.jpg";
            matrix[0][0] = 2;
        }
        ++numberOfMoves;
        ++ok1;
        game_overQ();
    }
}

function changeImage2() {
    if (ok2 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("01").src = "x.jpg";
            matrix[0][1] = 1;
        } else {
            document.getElementById("01").src = "zero.jpg";
            matrix[0][1] = 2;
        }
        ++numberOfMoves;
        ++ok2;
        game_overQ();
    }
}

function changeImage3() {
    if (ok3 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("02").src = "x.jpg";
            matrix[0][2] = 1;
        } else {
            document.getElementById("02").src = "zero.jpg";
            matrix[0][2] = 2;
        }
        ++numberOfMoves;
        ++ok3;
        game_overQ();
    }
}

function changeImage4() {
    if (ok4 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("10").src = "x.jpg";
            matrix[1][0] = 1;
        } else {
            document.getElementById("10").src = "zero.jpg";
            matrix[1][0] = 2;
        }
        ++numberOfMoves;
        ++ok4;
        game_overQ();
    }
}

function changeImage5() {
    if (ok5 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("11").src = "x.jpg";
            matrix[1][1] = 1;
        } else {
            document.getElementById("11").src = "zero.jpg";
            matrix[1][1] = 2;
        }
        ++numberOfMoves;
        ++ok5;
        game_overQ();
    }
}

function changeImage6() {
    if (ok6 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("12").src = "x.jpg";
            matrix[1][2] = 1;
        } else {
            document.getElementById("12").src = "zero.jpg";
            matrix[1][2] = 2;
        }
        ++numberOfMoves;
        ++ok6;
        game_overQ();
    }
}

function changeImage7() {
    if (ok7 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("20").src = "x.jpg";
            matrix[2][0] = 1;
        } else {
            document.getElementById("20").src = "zero.jpg";
            matrix[2][0] = 2;
        }
        ++numberOfMoves;
        ++ok7;
        game_overQ();
    }
}

function changeImage8() {
    if (ok8 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("21").src = "x.jpg";
            matrix[2][1] = 1;
        } else {
            document.getElementById("21").src = "zero.jpg";
            matrix[2][1] = 2;
        }
        ++numberOfMoves;
        ++ok8;
        game_overQ();
    }
}

function changeImage9() {
    if (ok9 == 0 && winner == "?") {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("22").src = "x.jpg";
            matrix[2][2] = 1;
        } else {
            document.getElementById("22").src = "zero.jpg";
            matrix[2][2] = 2;
        }
        ++numberOfMoves;
        ++ok9;
        gameOver();
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