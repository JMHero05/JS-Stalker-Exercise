const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Score'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Score'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');
let winningScore = 3;
let isGameOver = false;

const updateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score++;
    if (player.score >= winningScore && player.score - opponent.score >= 2) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
};

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', () => {
  winningScore = parseInt(winningScoreSelect.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
