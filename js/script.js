// get the mainContainer element
let mainContainer = document.querySelector(".mainContainer");

// get button elements
let fullScreenBtn = document.querySelector("#fullScreenBtn");
let exitBtn = document.querySelector(".exitBtn");
let rockMoveBtn = document.querySelector("#rockMoveBtn");
let paperMoveBtn = document.querySelector("#paperMoveBtn");
let scissorMoveBtn = document.querySelector("#scissorMoveBtn");

// get recemt move image container
let recentMovesImgContainer = document.querySelector(
  "#recentMovesImgContainer"
);

// get player move container
let playerMoveContainer = document.querySelector(".playerMoveContainer");

// get picked move image
let playerPickedMoveImg = document.querySelector("#playerPickedMoveImg");
let botPickedMoveImg = document.querySelector("#botPickedMoveImg");

// get score display container
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let botScoreDisplay = document.querySelector("#botScoreDisplay");

// get the small screen prompt element
let smallScreenPrompt = document.querySelector("#smallScreenPrompt");
let smallScreenPromptTxt = document.querySelector("#smallScreenPromptTxt");

// get popup message container
let popupMsgContainer = document.querySelector("#popupMessage");

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

// --------------------- GAME CODE ------------------------ //

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

// add event listener to exit button
exitBtn.addEventListener("click", exitGamePopupMsg);

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

  playerMoveContainer.classList.add("disabled");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      removeMoveBtnEventListener();
      addAnim();
      setTimeout(rockRock, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "paper":
      removeMoveBtnEventListener();
      addAnim();
      // add score to bot
      botScore += 1;
      setTimeout(rockPaper, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "scissor":
      removeMoveBtnEventListener();
      addAnim();
      // add score to player
      playerScore += 1;
      setTimeout(rockScissor, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    default:
  }

  function rockRock() {
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function rockPaper() {
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function rockScissor() {
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }
}

function paperMoveFn() {
  // create div element to be added to recent moves image container
  let recentmoveImgSubCon = document.createElement("div");

  // create img element to be added to recemt moves image sub container
  let recemtmoveImgPlayer = document.createElement("img");
  let recemtmoveImgVersus = document.createElement("img");
  let recemtmoveImgBot = document.createElement("img");

  playerMoveContainer.classList.add("disabled");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      removeMoveBtnEventListener();
      addAnim();
      // add score to player
      playerScore += 1;
      setTimeout(paperRock, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "paper":
      removeMoveBtnEventListener();
      addAnim();
      setTimeout(paperPaper, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "scissor":
      removeMoveBtnEventListener();
      addAnim();
      // add score to bot
      botScore += 1;
      setTimeout(paperScissor, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    default:
  }

  function paperRock() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function paperPaper() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function paperScissor() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }
}

function scissorMoveFn() {
  // create div element to be added to recent moves image container
  let recentmoveImgSubCon = document.createElement("div");

  // create img element to be added to recemt moves image sub container
  let recemtmoveImgPlayer = document.createElement("img");
  let recemtmoveImgVersus = document.createElement("img");
  let recemtmoveImgBot = document.createElement("img");

  playerMoveContainer.classList.add("disabled");

  switch (botMove[Math.floor(Math.random() * 3)]) {
    case "rock":
      removeMoveBtnEventListener();
      addAnim();
      // add score to bot
      botScore += 1;
      setTimeout(scissorRock, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "paper":
      removeMoveBtnEventListener();
      addAnim();
      // add score to player
      playerScore += 1;
      setTimeout(scissorPaper, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    case "scissor":
      removeMoveBtnEventListener();
      addAnim();
      setTimeout(scissorScissor, 3000);
      setTimeout(removeAnim, 3000);
      setTimeout(updateScoreDisplay, 3000);
      if (playerScore < 5 && botScore < 5) {
        setTimeout(addMoveBtnEventListener, 3000);
      }
      break;
    default:
  }

  function scissorRock() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function scissorPaper() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }

  function scissorScissor() {
    // change picked move image
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
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgVersus);
    recentmoveImgSubCon.insertAdjacentElement("beforeend", recemtmoveImgBot);
  }
}

// functions that will be called
function exitGamePopupMsg() {
  showPopupExitMsg();
}

function exitGame() {
  window.close();
}

function playAgain() {
  playerScore = 0;
  botScore = 0;

  while (recentMovesImgContainer.hasChildNodes()) {
    recentMovesImgContainer.removeChild(recentMovesImgContainer.firstChild);
  }

  updateScoreDisplay();
  hidePopupMsg();
}

function showPopupExitMsg() {
  // show popup message
  popupMsgContainer.style.display = "flex";
  popupMsgContainer.classList.add("animate__tada");
  rockMoveBtn.removeEventListener("click", rockMoveFn);
  paperMoveBtn.removeEventListener("click", paperMoveFn);
  scissorMoveBtn.removeEventListener("click", scissorMoveFn);

  let popupMsgContent = document.createElement("div");
  popupMsgContent.classList = "popupMessageContent";

  let popupMessageContentH1 = document.createElement("h1");
  let popupMessageContentP = document.createElement("p");
  let popupMessageContentBtnY = document.createElement("button");
  let popupMessageContentBtnN = document.createElement("button");

  popupMessageContentH1.textContent = "Exit Game";
  popupMessageContentP.textContent = "Are you sure?";
  popupMessageContentBtnY.textContent = "Yes";
  popupMessageContentBtnN.textContent = "No";

  popupMessageContentBtnY.addEventListener("click", exitGame);
  popupMessageContentBtnN.addEventListener("click", hidePopupMsg);

  popupMsgContainer.insertAdjacentElement("afterbegin", popupMsgContent);
  popupMsgContent.insertAdjacentElement("afterbegin", popupMessageContentH1);
  popupMsgContent.insertAdjacentElement("beforeend", popupMessageContentP);
  popupMsgContent.insertAdjacentElement("beforeend", popupMessageContentBtnY);
  popupMsgContent.insertAdjacentElement("beforeend", popupMessageContentBtnN);
}

function showPopupMsg() {
  // show popup message
  popupMsgContainer.style.display = "flex";
  popupMsgContainer.classList.add("animate__tada");
  rockMoveBtn.removeEventListener("click", rockMoveFn);
  paperMoveBtn.removeEventListener("click", paperMoveFn);
  scissorMoveBtn.removeEventListener("click", scissorMoveFn);

  let popupMsgContent = document.createElement("div");
  popupMsgContent.classList = "popupMessageContent";

  let popupMessageContentH1 = document.createElement("h1");
  let popupMessageContentP = document.createElement("p");

  let popupMessageContentBtnAgain = document.createElement("button");
  let popupMessageContentBtnExit = document.createElement("button");

  if (playerScore == 5) {
    popupMessageContentH1.textContent = "Player 1 Won!";
    popupMessageContentP.textContent =
      winMessage[Math.floor(Math.random() * 4)];
    popupMessageContentBtnAgain.textContent = "Play Again";
    popupMessageContentBtnExit.textContent = "Exit Now";

    popupMessageContentBtnAgain.addEventListener("click", playAgain);
    popupMessageContentBtnExit.addEventListener("click", exitGame);

    popupMsgContainer.insertAdjacentElement("afterbegin", popupMsgContent);
    popupMsgContent.insertAdjacentElement("afterbegin", popupMessageContentH1);
    popupMsgContent.insertAdjacentElement("beforeend", popupMessageContentP);
    popupMsgContent.insertAdjacentElement(
      "beforeend",
      popupMessageContentBtnAgain
    );
    popupMsgContent.insertAdjacentElement(
      "beforeend",
      popupMessageContentBtnExit
    );
  } else if (botScore == 5) {
    popupMessageContentH1.textContent = "Bot Won!";
    popupMessageContentP.textContent =
      loseMessage[Math.floor(Math.random() * 4)];
    popupMessageContentBtnAgain.textContent = "Play Again";
    popupMessageContentBtnExit.textContent = "Exit Now";

    popupMessageContentBtnAgain.addEventListener("click", playAgain);
    popupMessageContentBtnExit.addEventListener("click", exitGame);
    popupMsgContainer.insertAdjacentElement("afterbegin", popupMsgContent);
    popupMsgContent.insertAdjacentElement("afterbegin", popupMessageContentH1);
    popupMsgContent.insertAdjacentElement("beforeend", popupMessageContentP);
    popupMsgContent.insertAdjacentElement(
      "beforeend",
      popupMessageContentBtnAgain
    );
    popupMsgContent.insertAdjacentElement(
      "beforeend",
      popupMessageContentBtnExit
    );
  }
}

function hidePopupMsg() {
  // hide popup message
  popupMsgContainer.style.display = "none";
  popupMsgContainer.classList.remove("animate__tada");
  rockMoveBtn.addEventListener("click", rockMoveFn);
  paperMoveBtn.addEventListener("click", paperMoveFn);
  scissorMoveBtn.addEventListener("click", scissorMoveFn);

  while (popupMsgContainer.hasChildNodes()) {
    popupMsgContainer.removeChild(popupMsgContainer.firstChild);
  }
}

function addAnim() {
  // change picked move image
  playerPickedMoveImg.src = "images/Rock-Player.svg";
  botPickedMoveImg.src = "images/Rock-Bot.svg";

  playerPickedMoveImg.classList.add("animate__swing");
  botPickedMoveImg.classList.add("animate__swing");
}

function removeAnim() {
  playerPickedMoveImg.classList.remove("animate__swing");
  botPickedMoveImg.classList.remove("animate__swing");
}

function addMoveBtnEventListener() {
  // remove event listener of move buttons
  rockMoveBtn.addEventListener("click", rockMoveFn);
  paperMoveBtn.addEventListener("click", paperMoveFn);
  scissorMoveBtn.addEventListener("click", scissorMoveFn);
  playerMoveContainer.classList.remove("disabled");
}

function removeMoveBtnEventListener() {
  // remove event listener of move buttons
  rockMoveBtn.removeEventListener("click", rockMoveFn);
  paperMoveBtn.removeEventListener("click", paperMoveFn);
  scissorMoveBtn.removeEventListener("click", scissorMoveFn);
}

function updateScoreDisplay() {
  // fill the star dipending on the scores
  if (playerScore == 0) {
    playerScoreDisplay.children[0].classList = "fa-regular fa-star";
    playerScoreDisplay.children[1].classList = "fa-regular fa-star";
    playerScoreDisplay.children[2].classList = "fa-regular fa-star";
    playerScoreDisplay.children[3].classList = "fa-regular fa-star";
    playerScoreDisplay.children[4].classList = "fa-regular fa-star";
  } else if (playerScore == 1) {
    playerScoreDisplay.children[0].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (playerScore == 2) {
    playerScoreDisplay.children[1].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (playerScore == 3) {
    playerScoreDisplay.children[2].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (playerScore == 4) {
    playerScoreDisplay.children[3].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (playerScore == 5) {
    playerScoreDisplay.children[4].classList =
      "fa-solid fa-star  animate__animated animate__tada";
    removeMoveBtnEventListener();
    showPopupMsg();
  }

  if (botScore == 0) {
    botScoreDisplay.children[0].classList = "fa-regular fa-star";
    botScoreDisplay.children[1].classList = "fa-regular fa-star";
    botScoreDisplay.children[2].classList = "fa-regular fa-star";
    botScoreDisplay.children[3].classList = "fa-regular fa-star";
    botScoreDisplay.children[4].classList = "fa-regular fa-star";
  } else if (botScore == 1) {
    botScoreDisplay.children[0].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (botScore == 2) {
    botScoreDisplay.children[1].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (botScore == 3) {
    botScoreDisplay.children[2].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (botScore == 4) {
    botScoreDisplay.children[3].classList =
      "fa-solid fa-star  animate__animated animate__tada";
  } else if (botScore == 5) {
    botScoreDisplay.children[4].classList =
      "fa-solid fa-star  animate__animated animate__tada";
    removeMoveBtnEventListener();
    showPopupMsg();
  }
}
