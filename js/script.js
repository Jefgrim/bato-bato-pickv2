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
