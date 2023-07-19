// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 doing party!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number';
    displayMessage('🚫 No Number');
  }

  // When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 doing party!';
    displayMessage('🥳 doing party!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //   Refactor the code according to DRY
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '⚡ Too high' : '🪫 Too low';
      displayMessage(guess > secretNumber ? '⚡ Too high' : '🪫 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '⚡You lost the game';
      displayMessage('⚡You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   When guess number is too high
  //   else if (guess > secretNumber) {
  //        if (score > 1) {
  //       document.querySelector('.message').textContent = guess>secretNumber ? '⚡ Too high':;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '⚡You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   }

  //   //   When guess number is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🪫 Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '⚡You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
