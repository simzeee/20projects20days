const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEle = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game

const words = ["sigh", "tense", "airplane", "ball", "loving"];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Init difficulty
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
console.log(difficulty)

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
let getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

// Add word to DOM
let addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

// Update Score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEle.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;
  endgameEle.style.display = "flex";
}

addWordToDom();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();
    e.target.value = "";

    if (difficulty === 'hard'){
      time += 3;
    }
    else if (difficulty === 'medium'){
      time += 4;
    }
    else {
      time += 6;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings select
settingsForm.addEventListener("change", e => {
  difficulty = e.target.value;
  console.log(difficulty, "HERE")
  localStorage.setItem("difficulty", difficulty);
});
