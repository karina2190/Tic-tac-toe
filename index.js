var numberOfMoves = 1;

function changeImage() {
    if ( numberOfMoves % 2 != 0) {
        document.getElementById("1").src = "zero.jpg";
    } else {
        document.getElementById("1").src = "x.jpg";
    }
    ++numberOfMoves;
}