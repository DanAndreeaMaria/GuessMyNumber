'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // Covering different scenarios of guessing the number
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    // Generated secret number
    document.querySelector('.number').textContent = secretNumber;
    // Change bg-color on winning
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change the width of the guessed number
    document.querySelector('.number').style.width = '30rem';

    // High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // Secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Message
  document.querySelector('.message').textContent = 'Start guessing...';
  // Restore '?'
  document.querySelector('.number').textContent = '?';
  // Score
  document.querySelector('.score').textContent = score;
  // Guess input
  document.querySelector('.guess').value = '';

  // Restore bg color
  document.querySelector('body').style.backgroundColor = '#222';
  // Restore number width
  document.querySelector('.number').style.width = '15rem';
});
