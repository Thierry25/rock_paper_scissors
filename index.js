let WIN_VAL = 1;
let LOSE_VAL = -1;
let TIE_VAL = 0;
let ARR_VALUES = ["rock", "paper", "scissors"];

let userScore = document.querySelector("#user_score");
let pcScore = document.querySelector("#pc_score");
let title = document.querySelector("#title");

let userChoice = document.querySelector("#user_choice");
let pcChoice = document.querySelector("#pc_choice");

let userScoreContent = +userScore.textContent;
let pcScoreContent = +pcScore.textContent;

let playRound = (playerSelection, computerSelection) => {
  let playerVal = ARR_VALUES.indexOf(playerSelection.toLowerCase());

  if (playerVal === 0 && computerSelection === 2) return WIN_VAL;
  if (playerVal === 2 && computerSelection === 0) return LOSE_VAL;
  if (computerSelection > playerVal) return LOSE_VAL;
  if (playerVal > computerSelection) return WIN_VAL;
  return TIE_VAL;
};

function retrieveElement(e) {
  if (userScoreContent === 5) win();
  if (pcScoreContent === 5) lost();
  if (userScoreContent < 5 && pcScoreContent < 5) {
    e.target.classList.add("clicked");
    let pcPlay = Math.floor(Math.random() * 3);
    let score = playRound(e.target.id, pcPlay);
    userChoice.textContent = e.target.id;
    pcChoice.textContent = ARR_VALUES[pcPlay];

    if (score === WIN_VAL) {
      userScoreContent += 1;
      userScore.textContent = userScoreContent;
      alterText(1, e.target.id, ARR_VALUES[pcPlay]);
      if (userScoreContent === 5) win();
    } else if (score === LOSE_VAL) {
      pcScoreContent += 1;
      pcScore.textContent = pcScoreContent;
      alterText(-1, e.target.id, ARR_VALUES[pcPlay]);
      if (pcScoreContent === 5) lost();
    } else {
      alterText(0, e.target.id, ARR_VALUES[pcPlay]);
    }
  }
}

function win() {
  if (confirm("You won!🥳 Restart?")) {
    window.location.reload();
  }
}

function lost() {
  if (confirm("You lost!😣😕 Restart?")) {
    window.location.reload();
  }
}

function alterText(value, user, pc) {
  if (value === 1) {
    title.textContent = `${user} beats ${pc}`;
  } else if (value === -1) {
    title.textContent = `${user} loses to ${pc}`;
  } else if (value === 0) {
    title.textContent = `${user} ties with ${pc}`;
  }
}

function alertWinner(score) {}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("clicked");
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => button.addEventListener("click", retrieveElement));
buttons.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
