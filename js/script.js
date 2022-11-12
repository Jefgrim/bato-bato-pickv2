// get the mainContainer
let mainContainer = document.querySelector(".mainContainer");
let restartBtn = document.querySelector(".restartBtn");
let fullScreenBtn = document.querySelector("#fullScreenBtn");
let quitBtn = document.querySelector("#quitBtn");
let smallScreenPrompt = document.querySelector("#smallScreenPrompt");
let smallScreenPromptTxt = document.querySelector("#smallScreenPromptTxt");

// if screen is width is less than 768px do this
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
