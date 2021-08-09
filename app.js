/* Game Function: 

- Players must guess a number between a min and max
- Player get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- let player choose to play again

*/

// Game values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// Ui Elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num");
maxNum = document.querySelector.apply(".max-num");
guessBtn = document.querySelector("#guess-btn");
guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventlistener("click", function () {
  let guess = parseInt(guessInput.value);

  // validar

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enteder a number between ${min} and ${max}`, "red");
  }

  // Check if won

  if (guess === winnningNum) {
    // disable input

    guessInput.disabled = true;

    guessInput.style.boderColor = " green";

    setMessage(`${winningNum} is correct, You Win`, "green");
  } else {
    // wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game oover
      guessInput.disabled = true;

      guessInput.style.boderColor = " red";

      setMessage(
        `Game over, You Lost. The correct number was ${winningNum}`,
        "red"
      );
    } else {
      // game continue

      guessInput.style.boderColor = " red";

      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// set message func

function setMessage(msg) {
  message.style.color = "red";
  message.textContent = msg;
}
