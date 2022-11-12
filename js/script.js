// get the mainContainer element
let mainContainer = document.querySelector(".mainContainer");

// get button elements
let restartBtn = document.querySelector(".restartBtn");
let fullScreenBtn = document.querySelector("#fullScreenBtn");
let quitBtn = document.querySelector("#quitBtn");
let rockMoveBtn = document.querySelector("#rockMoveBtn");
let paperMoveBtn = document.querySelector("#paperMoveBtn");
let scissorMoveBtn = document.querySelector("#scissorMoveBtn");

// get recemt move container
let recentMovesImgContainer = document.querySelector(
  "#recentMovesImgContainer"
);

// get picked move image
let playerPickedMoveImg = document.querySelector("#playerPickedMoveImg");
let botPickedMoveImg = document.querySelector("#botPickedMoveImg");

// get score display container
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let botScoreDisplay = document.querySelector("#botScoreDisplay");

// get the small screen prompt element
let smallScreenPrompt = document.querySelector("#smallScreenPrompt");
let smallScreenPromptTxt = document.querySelector("#smallScreenPromptTxt");

// if screen width is less than 768px do this
if (window.innerWidth < 630) {
  fullScreenBtn.addEventListener("click", fullscreen);
} else {
  mainContainer.style.display = "block";
  smallScreenPrompt.style.display = "none";
}

// event listener for changing window size
window.addEventListener("resize", reportWindowWidth);

function reportWindowWidth() {
  if (window.innerWidth < 630) {
    fullScreenBtn.addEventListener("click", fullscreen);
    mainContainer.style.display = "none";
    smallScreenPrompt.style.display = "flex";
  } else {
    fullScreenBtn.removeEventListener("click", fullscreen);
    mainContainer.style.display = "block";
    smallScreenPrompt.style.display = "none";
  }
}

// toggle fullscreen and landscape mode especially for mobile
function fullscreen() {
  mainContainer.requestFullscreen();
  screen.orientation.lock("landscape-primary");
  if (window.innerWidth < 630) {
    document.exitFullscreen();
    smallScreenPromptTxt.textContent =
      "Your Screen is too small for this game, Sorry.";
    fullScreenBtn.style.display = "none";
    quitBtn.style.display = "block";
    quitBtn.addEventListener("click", quitGame);

    function quitGame() {
      window.close();
    }
  }
}

// game code

// declare score
let playerScore = 0;
let botScore = 0;

// declare bot moves
botMove = ["rock", "paper", "scissor"];

// add event listener to move buttons
rockMoveBtn.addEventListener("click", rockMoveFn);
paperMoveBtn.addEventListener("click", paperMoveFn);
scissorMoveBtn.addEventListener("click", scissorMoveFn);

// added functions
function rockMoveFn() {
  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";
      break;
    case "paper":
      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";
      break;
    case "scissor":
      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";
      break;
    default:
  }
}
function paperMoveFn() {
  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";
      break;
    case "paper":
      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";
      break;
    case "scissor":
      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";
      break;
    default:
  }
}
function scissorMoveFn() {
  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";
      break;
    case "paper":
      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";
      break;
    case "scissor":
      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";
      break;
    default:
  }
}
