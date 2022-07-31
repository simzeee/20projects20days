const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEle = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'loving'
]

// Init word
let randomWord;

// Init score
let score = 0

// Init time

let time = 10;

// Generate random word from array
let getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
let addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update Score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDom()

// Event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  
  if(insertedText === randomWord){
    addWordToDom();
    updateScore();
    e.target.value = '';
  }
})