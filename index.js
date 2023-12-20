var playerClick = [];
var computer = ["green","red","yellow","blue"];
var computerClick = [];
var level = 0;
var game = false;
$(document).keydown(function () {
    if (!game) {
        $('h1').text("Level 1");
        setTimeout(autoClick, 800);
        game=true;
}    
})

$("[type='button']").click(function () {
    var a = $(this).attr("id");
    addSound(a);
    animate(a);
    playerClick.push(a);
    checkClick((playerClick.length)-1);
})

function autoClick() {
    playerClick = [];
    var randomNum = Math.floor(Math.random()*4);
    var b = $("[type][id]")[randomNum].id;
    animate(b);
    addSound(b);
    computerClick.push(computer[randomNum]);
}

function checkClick(click) {
    if (playerClick[click]===computerClick[click]) {
        if (playerClick.length===computerClick.length) {
            level++;
            $("h1").text("Level "+ level);
            setTimeout(autoClick, 1000);
            
        }
    } else {
        $("h1").text("Game Over! Press any key to restart.");
        $("body").addClass("game-over");
        new Audio("sounds/wrong.mp3").play();
        setTimeout(function () {
            $("body").removeClass("game-over"); 
        } , 300)
        game = false;
        computerClick = [];
        level = 0
    }
}

function addSound(click) {
    switch (click) {
        case "green":
            new Audio("sounds/green.mp3").play();
            break;
        case "red":
            new Audio("sounds/red.mp3").play();
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;
        default:
            break;
    }
}

function animate(click) {
    $("#"+click).addClass("pressed")
    setTimeout(function(click) {
        $("[type='button']").removeClass("pressed");    
    }, 200);    
}

