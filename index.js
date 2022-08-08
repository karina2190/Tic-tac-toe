var numberOfMoves = 1, ok1 = 0, ok2 = 0, ok3 = 0, ok4 = 0, ok5 = 0, ok6 = 0, ok7 = 0, ok8 = 0, ok9 = 0;
const matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var winner = "?";


function changeImage1() {
    if (ok1 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("11").src = "x.jpg";
            matrix[0][0] = 1;
        } else {
            document.getElementById("11").src = "zero.jpg";
            matrix[0][0] = 2;
        }
        ++numberOfMoves;
        ++ok1;
        game_overQ();
    }
}

function changeImage2() {
    if (ok2 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("12").src = "x.jpg";
            matrix[0][1] = 1;
        } else {
            document.getElementById("12").src = "zero.jpg";
            matrix[0][1] = 2;
        }
        ++numberOfMoves;
        ++ok2;
        game_overQ();
    }
}

function changeImage3() {
    if (ok3 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("13").src = "x.jpg";
            matrix[0][2] = 1;
        } else {
            document.getElementById("13").src = "zero.jpg";
            matrix[0][2] = 2;
        }
        ++numberOfMoves;
        ++ok3;
        game_overQ();
    }
}

function changeImage4() {
    if (ok4 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("21").src = "x.jpg";
            matrix[1][0] = 1;
        } else {
            document.getElementById("21").src = "zero.jpg";
            matrix[1][0] = 2;
        }
        ++numberOfMoves;
        ++ok4;
        game_overQ();
    }
}

function changeImage5() {
    if (ok5 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("22").src = "x.jpg";
            matrix[1][1] = 1;
        } else {
            document.getElementById("22").src = "zero.jpg";
            matrix[1][1] = 2;
        }
        ++numberOfMoves;
        ++ok5;
        game_overQ();
    }
}

function changeImage6() {
    if (ok6 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("23").src = "x.jpg";
            matrix[1][2] = 1;
        } else {
            document.getElementById("23").src = "zero.jpg";
            matrix[1][2] = 2;
        }
        ++numberOfMoves;
        ++ok6;
        game_overQ();
    }
}

function changeImage7() {
    if (ok7 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("31").src = "x.jpg";
            matrix[2][0] = 1;
        } else {
            document.getElementById("31").src = "zero.jpg";
            matrix[2][0] = 2;
        }
        ++numberOfMoves;
        ++ok7;
        game_overQ();
    }
}

function changeImage8() {
    if (ok8 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("32").src = "x.jpg";
            matrix[2][1] = 1;
        } else {
            document.getElementById("32").src = "zero.jpg";
            matrix[2][1] = 2;
        }
        ++numberOfMoves;
        ++ok8;
        game_overQ();
    }
}

function changeImage9() {
    if (ok9 == 0) {
        if (numberOfMoves % 2 != 0) {
            document.getElementById("33").src = "x.jpg";
            matrix[2][2] = 1;
        } else {
            document.getElementById("33").src = "zero.jpg";
            matrix[2][2] = 2;
        }
        ++numberOfMoves;
        ++ok9;
        game_overQ();
    }
}

function game_overQ() {
    return winnerQ(matrix[0][0], matrix[0][1], matrix[0][2]) 
       ||  winnerQ(matrix[1][0], matrix[1][1],matrix[1][2]) 
       ||  winnerQ(matrix[2][0], matrix[2][1], matrix[2][2]) 
       ||  winnerQ(matrix[0][0], matrix[1][0], matrix[2][0]) 
       ||  winnerQ(matrix[0][1], matrix[1][1], matrix[2][1]) 
       ||  winnerQ(matrix[0][2], matrix[1][2], matrix[2][2]) 
       ||  winnerQ(matrix[0][0], matrix[1][1], matrix[2][2]) 
       ||  winnerQ(matrix[2][0], matrix[1][1], matrix[0][2])
       ||  draw(); 
}

function winnerQ(p1, p2, p3) {
    if (p1 == -1) return false;
    if (p1 != p2) return false;
    if (p1 != p3) return false;
    checkWinner(p1);
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