// get the mainContainer
let mainContainer = document.querySelector(".mainContainer");
let restartBtn = document.querySelector(".restartBtn");

// if screen is width is less than 768px do this
if (window.innerWidth < 768) {
  restartBtn.addEventListener("click", fullscreen);
}

// event listener for changing window size
window.addEventListener("resize", reportWindowWidth);

function reportWindowWidth() {
  if (window.innerWidth < 768) {
    restartBtn.addEventListener("click", fullscreen);
  } else {
    restartBtn.removeEventListener("click", fullscreen);
  }
}

function fullscreen() {
  mainContainer.requestFullscreen();
  screen.orientation.lock("landscape-primary");
}
