let playerOneInput = document.querySelector(".playerOneInput");
let playerOneButton = document.querySelector(".playerOneButton");
let playerTwoInput = document.querySelector(".playerTwoInput");
let playerTwoButton = document.querySelector(".playerTwoButton");
let startNewGame = document.querySelector(".startNewGame");
let celebration = document.querySelector(".celebration");
let player = document.querySelector(".player");
let error = document.querySelector(".error");
let chance = document.querySelector(".chance");
let count = 5;

//================= Player: 1

playerOneButton.addEventListener("click", function () {
  if (!playerOneInput.value) {
    error.innerHTML = "Please enter something";
  } else {
    if (!(playerOneInput.value - 12)) {
      error.innerHTML = "Please enter a number only";
    } else {
      if (playerOneInput.value <= 10 && playerOneInput.value > 0) {
        playerOneInput.style.display = "none";
        playerOneButton.style.display = "none";
        playerTwoInput.style.display = "inline-block";
        playerTwoButton.style.display = "inline-block";
        playerTwoInput.style.display = "inline-block";
        error.innerHTML = "";
        player.innerHTML = "Player: 2";
        chance.style.display = "block";
        chance.innerHTML = `Chance: ${count}`;
      } else {
        error.innerHTML = "Please enter number between 1 to 10";
      }
    }
  }
});

//================= Player: 2

playerTwoButton.addEventListener("click", function () {
  if (!playerTwoInput.value) {
    error.innerHTML = "please enter something";
  } else {
    if (!(playerTwoInput.value - 999)) {
      error.innerHTML = "please enter a number only";
    } else {
      if (playerTwoInput.value > 0 && playerTwoInput.value <= 10) {
        if (count > 1) {
          count--;
          chance.innerHTML = `Chance: ${count}`;

          if (playerOneInput.value == playerTwoInput.value) {
            player.innerHTML = "Player 2 Is Winner";
            playerTwoButton.style.display = "none";
            startNewGame.style.display = "block";
            startNewGame.innerHTML = "start New Game";
            showCelebration("Player 2")
          } else {
          }
        } else {
          player.innerHTML = "Player 1 is Winner";
          chance.innerHTML = `Chance: ${0}`;
          playerTwoButton.style.display = "none";
          error.innerHTML = "you missed all chance. let's try again.";
          startNewGame.style.display = "block";
          startNewGame.innerHTML = "start New Game";
          showCelebration("Player 1")
        }
      } else {
        error.innerHTML = "please enter number between 1 to 10";
      }
    }
  }

  //================= startNewGame
  
  startNewGame.addEventListener("click", function () {
    player.innerHTML = "Player: 1";
    chance.innerHTML = "";
    error.innerHTML = "";
    playerOneInput.value = "";
    playerTwoInput.value = "";
    playerOneInput.style.display = "inline-block";
    playerOneButton.style.display = "inline-block";
    playerTwoInput.style.display = "none";
    playerTwoButton.style.display = "none";
    startNewGame.style.display = "none";
    count = 5;
    });
});

//================= showCelebration

function showCelebration(winner) {
    const celebration = document.querySelector(".celebration");
    celebration.style.display = "flex"; // Show the celebration

    setTimeout(() => {
        celebration.style.display = "none"; // Hide it after 3 seconds
        alert(`${winner} is the Winner!`);
    }, 3000);
}




const numbers = [10, 20, 30, 40];

numbers.forEach((number) => {
    console.log(number);
});
