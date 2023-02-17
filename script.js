const input = document.querySelector("input");
input.focus();

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

function messageFunc(message) {
  document.querySelector(".message").textContent = message;
}

function gameOver() {
  input.setAttribute("disabled", true);
  document.querySelector(".check").style.display = "none";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = Number(input.value);

  if (!inputVal) {
    messageFunc("Enter the number...?");
  } else if (inputVal === secretNumber) {
    messageFunc("You found the secret number");
    document.body.style.background = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("h1").textContent = "Well done";
    gameOver();

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (inputVal !== secretNumber) {
    if (score > 1) {
      messageFunc(
        secretNumber < inputVal
          ? "My number is small...!"
          : "My number is big...!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageFunc("Siz yutqazdingiz..!");
      document.querySelector(".score").textContent = 0;
      gameOver();
    }
  }
  input.value = "";
});