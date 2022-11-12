// get the mainContainer element
let mainContainer = document.querySelector(".mainContainer");

// get button elements
let restartBtn = document.querySelector(".restartBtn");
let fullScreenBtn = document.querySelector("#fullScreenBtn");
let exitBtn = document.querySelector(".exitBtn");
let quitBtn = document.querySelector("#quitBtn");
let rockMoveBtn = document.querySelector("#rockMoveBtn");
let paperMoveBtn = document.querySelector("#paperMoveBtn");
let scissorMoveBtn = document.querySelector("#scissorMoveBtn");

// get recemt move image container
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
let botMove = ["rock", "paper", "scissor"];

// declare random message if you win
let winMessage = [
  "Wow! You did great!",
  "I Bet the bot is crying now!",
  "You don't have mercy for the bot T_T",
  "Okay I know! I really need to improve the bot",
  "Chill that is just a bot, congratulations by the way.",
];

// declare random message if you lose
let loseMessage = [
  "Don't cry my friend, it's just a game",
  "Well luck is not in your side",
  "Damn! i'm proud of the bot!",
  "I trained that bot, you loser!",
  "Better luck next time, if luck will ever be with you tho",
];

// add event listener to restart button
restartBtn.addEventListener("click", refreshPage);

// add event listener to exit button
exitBtn.addEventListener("click", exitGame);

// add event listener to the move buttons
rockMoveBtn.addEventListener("click", rockMoveFn);
paperMoveBtn.addEventListener("click", paperMoveFn);
scissorMoveBtn.addEventListener("click", scissorMoveFn);

// added functions
function rockMoveFn() {
  // create div element to be added to recent moves image container
  let recentmoveImgSubCon = document.createElement("div");

  // create img element to be added to recemt moves image sub container
  let recemtmoveImgPlayer = document.createElement("img");
  let recemtmoveImgVersus = document.createElement("img");
  let recemtmoveImgBot = document.createElement("img");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      // change picked move image
      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesDrawImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Rock-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Rock-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "paper":
      // add score to bot
      botScore += 1;

      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesLoseImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Rock-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Paper-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "scissor":
      // add score to player
      playerScore += 1;

      playerPickedMoveImg.src = "images/Rock-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesWinImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Rock-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Scissor-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    default:
  }

  // fill the star dipending on the scores
  if (playerScore == 1) {
    playerScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (playerScore == 2) {
    playerScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (playerScore == 3) {
    playerScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (playerScore == 4) {
    playerScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (playerScore == 5) {
    playerScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for winning
    alert(winMessage[Math.round(Math.random() * 4)]);
  }

  if (botScore == 1) {
    botScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (botScore == 2) {
    botScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (botScore == 3) {
    botScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (botScore == 4) {
    botScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (botScore == 5) {
    botScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for losing
    alert(loseMessage[Math.round(Math.random() * 4)]);
  }
}
function paperMoveFn() {
  // create div element to be added to recent moves image container
  let recentmoveImgSubCon = document.createElement("div");

  // create img element to be added to recemt moves image sub container
  let recemtmoveImgPlayer = document.createElement("img");
  let recemtmoveImgVersus = document.createElement("img");
  let recemtmoveImgBot = document.createElement("img");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      // add score to player
      playerScore += 1;

      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesWinImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Paper-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Rock-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "paper":
      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesDrawImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Paper-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Paper-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "scissor":
      // add score to bot
      botScore += 1;

      playerPickedMoveImg.src = "images/Paper-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesLoseImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Paper-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Scissor-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    default:
  }

  if (playerScore == 1) {
    playerScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (playerScore == 2) {
    playerScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (playerScore == 3) {
    playerScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (playerScore == 4) {
    playerScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (playerScore == 5) {
    playerScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for winning
    alert(winMessage[Math.round(Math.random() * 4)]);
  }

  if (botScore == 1) {
    botScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (botScore == 2) {
    botScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (botScore == 3) {
    botScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (botScore == 4) {
    botScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (botScore == 5) {
    botScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for losing
    alert(loseMessage[Math.round(Math.random() * 4)]);
  }
}
function scissorMoveFn() {
  // create div element to be added to recent moves image container
  let recentmoveImgSubCon = document.createElement("div");

  // create img element to be added to recemt moves image sub container
  let recemtmoveImgPlayer = document.createElement("img");
  let recemtmoveImgVersus = document.createElement("img");
  let recemtmoveImgBot = document.createElement("img");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      // add score to bot
      botScore += 1;

      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Rock-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesLoseImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Scissor-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Rock-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "paper":
      // add score to player
      playerScore += 1;

      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Paper-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesWinImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Scissor-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Paper-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    case "scissor":
      playerPickedMoveImg.src = "images/Scissor-Player.svg";
      botPickedMoveImg.src = "images/Scissor-Bot.svg";

      // add class to the created div element
      recentmoveImgSubCon.classList = "recentMovesDrawImg";

      // add recent moves sub container to the recent moves container
      recentMovesImgContainer.insertAdjacentElement(
        "afterbegin",
        recentmoveImgSubCon
      );

      // add img src to recent moves images
      recemtmoveImgPlayer.src = "images/Scissor-Player.svg";
      recemtmoveImgVersus.src = "images/versusimg.svg";
      recemtmoveImgBot.src = "images/Scissor-Bot.svg";

      // add class to recent moves images
      recemtmoveImgPlayer.classList = "recentImgs";
      recemtmoveImgVersus.classList = "recentImgs";
      recemtmoveImgBot.classList = "recentImgs";

      // add contents to recent moves sub container
      recentmoveImgSubCon.insertAdjacentElement(
        "afterbegin",
        recemtmoveImgPlayer
      );
      recentmoveImgSubCon.insertAdjacentElement(
        "beforeend",
        recemtmoveImgVersus
      );
      recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
      break;
    default:
  }

  if (playerScore == 1) {
    playerScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (playerScore == 2) {
    playerScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (playerScore == 3) {
    playerScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (playerScore == 4) {
    playerScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (playerScore == 5) {
    playerScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for winning
    alert(winMessage[Math.round(Math.random() * 4)]);
  }

  if (botScore == 1) {
    botScoreDisplay.children[0].classList = "fa-solid fa-star";
  } else if (botScore == 2) {
    botScoreDisplay.children[1].classList = "fa-solid fa-star";
  } else if (botScore == 3) {
    botScoreDisplay.children[2].classList = "fa-solid fa-star";
  } else if (botScore == 4) {
    botScoreDisplay.children[3].classList = "fa-solid fa-star";
  } else if (botScore == 5) {
    botScoreDisplay.children[4].classList = "fa-solid fa-star";

    // remove event listener of move buttons
    rockMoveBtn.removeEventListener("click", rockMoveFn);
    paperMoveBtn.removeEventListener("click", paperMoveFn);
    scissorMoveBtn.removeEventListener("click", scissorMoveFn);

    // show message for losing
    alert(loseMessage[Math.round(Math.random() * 4)]);
  }
}

function refreshPage() {
  location.reload();
}

function exitGame() {
  if (confirm("Are you sure you want to quit the game?") == true) {
    window.close();
  } else {
    alert("Good! Beat that bot!");
  }
}
