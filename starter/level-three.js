/*
 * DOTS: Level Three
 *
 */
//Global variables setup
let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

function handleBallClick(increment) {
  score += increment;
  scoreDisplay.innerText = `${score}`;

  if (score === 100) {
    levelWinner.style.opacity = '1';
  } else {
    levelWinner.style.opacity = '0'; // Ensure opacity is set to 0 when the condition is not met
  }
}

balls.forEach((ball) => {
  const increment = parseInt(ball.dataset.increment);

  ball.addEventListener('click', () => {
    handleBallClick(increment);
  });
});
