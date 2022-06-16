var player = 100;
var computer = 100;

function changeImage(selector, num) {

    let image;
    if (selector == 0) {
        image = document.getElementById("player-img");
        player = num;
    }
    else {
        image = document.getElementById("computer-img");
        computer = 1;
    }


    if (num == 0) {
        image.src = "Images/stone.png";
    }
    else if (num == 1) {
        image.src = "Images/paper.png";
    }
    else {
        image.src = "Images/scissor.png"
    }

}

function computerChoice() {
    let choice = Math.floor(Math.random() * (3 - 0) + 0);
    changeImage(1, choice);
}