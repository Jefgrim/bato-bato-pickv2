// get the mainContainer
let mainContainer = document.querySelector(".mainContainer");
let restartBtn = document.querySelector(".restartBtn");
// if screen is width is less than 768px do this
if (window.innerWidth < 768) {
    restartBtn.addEventListener("click", fullscreen);
    function fullscreen(){
        mainContainer.requestFullscreen();   
    }
}