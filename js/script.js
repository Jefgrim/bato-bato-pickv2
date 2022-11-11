// get the mainContainer
let mainContainer = document.querySelector(".mainContainer");
let restartBtn = document.querySelector(".restartBtn");
let fullScreenBtn = document.querySelector("#fullScreenBtn");
let smallScreenPrompt = document.querySelector("#smallScreenPrompt");

// if screen is width is less than 768px do this
if (window.innerWidth < 768) {
  fullScreenBtn.addEventListener("click", fullscreen);
} else {
  mainContainer.style.display = "block";
  smallScreenPrompt.style.display = "none";
}

// event listener for changing window size
window.addEventListener("resize", reportWindowWidth);

function reportWindowWidth() {
  if (window.innerWidth < 768) {
    fullScreenBtn.addEventListener("click", fullscreen);
    mainContainer.style.display = "none";
    smallScreenPrompt.style.display = "flex";
  } else {
    fullScreenBtn.removeEventListener("click", fullscreen);
    mainContainer.style.display = "block";
    smallScreenPrompt.style.display = "none";
  }
}

function fullscreen() {
  mainContainer.requestFullscreen();
  screen.orientation.lock("landscape-primary");
}
