let secretNumber;
let attempts = 0;
let guessedNumbers = [];
let score = 0;
let timeLeft = 60;
let timer;

// DOM 元素
const userGuess = document.getElementById("userGuess");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const guessedDisplay = document.getElementById("guessed");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

function initGame() {
  // 初始化遊戲
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessedNumbers = [];
  timeLeft = 60;
  userGuess.disabled = false;
  submitBtn.disabled = false;
  message.textContent = "";
  updateDisplay();

  clearInterval(timer); // 清除之前的計時器
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `剩餘時間：${timeLeft} 秒`;
    if (timeLeft <= 0) {
      endGame(`⏰ 時間到！答案是 ${secretNumber}`);
    }
  }, 1000);
}

function updateDisplay() {
  attemptsDisplay.textContent = `猜測次數：${attempts}`;
  guessedDisplay.textContent = `已猜的數字：${guessedNumbers.length ? guessedNumbers.join(", ") : "無"}`;
  scoreDisplay.textContent = `總分：${score}`;
}

function checkGuess() {
  const guess = parseInt(userGuess.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "請輸入 1 到 100 之間的數字！";
    return;
  }

  if (guessedNumbers.includes(guess)) {
    message.textContent = "你已經猜過這個數字了！";
    return;
  }

  guessedNumbers.push(guess);
  attempts++;

  if (guess === secretNumber) {
    message.textContent = `🎉 恭喜你猜對了！答案是 ${secretNumber}`;
    score += 10;
    endGame("🎊 遊戲結束！");
  } else if (guess > secretNumber) {
    message.textContent = "數字太大了！";
  } else {
    message.textContent = "數字太小了！";
  }

  userGuess.value = "";
  updateDisplay();
}

function endGame(finalMessage) {
  message.textContent = finalMessage;
  userGuess.disabled = true;
  submitBtn.disabled = true;
  clearInterval(timer);
}

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", initGame);

// 初始啟動遊戲
initGame();


