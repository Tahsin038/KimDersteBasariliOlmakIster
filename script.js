// Oyun Durumu
const gameState = {
  selectedClass: null,
  selectedSubject: null,
  currentQuestionIndex: 0,
  score: 0,
  safeLevels: [5, 10, 15],
  jokersUsed: {
    half: false,
    audience: false,
    phone: false
  },
  questions: []
};

// Para Ağacı
const moneyTree = [
  "1. 100 TL",
  "2. 200 TL",
  "3. 300 TL",
  "4. 500 TL",
  "5. 1.000 TL (Güvenli)",
  "6. 2.000 TL",
  "7. 4.000 TL",
  "8. 8.000 TL",
  "9. 16.000 TL",
  "10. 32.000 TL (Güvenli)",
  "11. 64.000 TL",
  "12. 125.000 TL",
  "13. 250.000 TL",
  "14. 500.000 TL",
  "15. 1.000.000 TL 💰"
];

// DOM Elemanları
const screens = document.querySelectorAll(".screen");
const welcomeScreen = document.getElementById("welcomeScreen");
const subjectScreen = document.getElementById("subjectScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");
const selectedClassDisplay = document.getElementById("selectedClassDisplay");
const questionText = document.getElementById("question");
const answersGrid = document.querySelector(".answers-grid");
const questionNumber = document.getElementById("questionNumber");
const classBadge = document.querySelector(".class-badge");
const subjectBadge = document.querySelector(".subject-badge");

// Sorular (örnek)
const questionBank = {
  "5": [
    { question: "5 + 3 = ?", answers: ["6", "7", "8", "9"], correct: 2, subject: "Matematik" },
    { question: "Türkiye'nin başkenti neresidir?", answers: ["İstanbul", "Ankara", "İzmir", "Bursa"], correct: 1, subject: "Sosyal" }
  ],
  "6": [
    { question: "Yerçekimi kuvvetini kim bulmuştur?", answers: ["Einstein", "Newton", "Tesla", "Edison"], correct: 1, subject: "Fen" }
  ]
};

// Ekran geçişi
function showScreen(screen) {
  screens.forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// Para Ağacı oluştur
function createMoneyTree() {
  const container = document.querySelector(".money-levels");
  if (!container) return;
  container.innerHTML = "";

  moneyTree
    .slice()
    .reverse()
    .forEach((level, index) => {
      const div = document.createElement("div");
      div.classList.add("money-level");
      if (index === 0) div.classList.add("current");
      div.textContent = level;
      container.appendChild(div);
    });
}

// Soruları karıştır
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Oyunu başlat
function startGame() {
  createMoneyTree();

  const classQuestions = questionBank[gameState.selectedClass] || [];
  if (gameState.selectedSubject && gameState.selectedSubject !== "Karışık") {
    gameState.questions = classQuestions.filter(q => q.subject === gameState.selectedSubject);
  } else {
    gameState.questions = shuffleArray([...classQuestions]);
  }

  gameState.currentQuestionIndex = 0;
  showScreen(gameScreen);
  showQuestion();
}

// Soru göster
function showQuestion() {
  const questionObj = gameState.questions[gameState.currentQuestionIndex];
  if (!questionObj) return endGame(true);

  questionText.textContent = questionObj.question;
  questionNumber.textContent = `Soru ${gameState.currentQuestionIndex + 1}`;
  classBadge.textContent = `${gameState.selectedClass}. Sınıf`;
  subjectBadge.textContent = questionObj.subject;

  answersGrid.innerHTML = "";
  questionObj.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerHTML = `
      <div class="answer-letter">${String.fromCharCode(65 + i)}</div>
      <div class="answer-text">${ans}</div>
    `;
    btn.addEventListener("click", () => checkAnswer(i));
    answersGrid.appendChild(btn);
  });
}

// Cevap kontrol
function checkAnswer(index) {
  const questionObj = gameState.questions[gameState.currentQuestionIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => (btn.disabled = true));

  if (index === questionObj.correct) {
    buttons[index].classList.add("correct");
    gameState.currentQuestionIndex++;

    setTimeout(() => {
      if (gameState.currentQuestionIndex < moneyTree.length) {
        updateMoneyTree();
        showQuestion();
      } else {
        endGame(true);
      }
    }, 800);
  } else {
    buttons[index].classList.add("wrong");
    setTimeout(() => endGame(false), 800);
  }
}

// Para ağacı güncelle
function updateMoneyTree() {
  const levels = document.querySelectorAll(".money-level");
  levels.forEach(l => l.classList.remove("current", "completed"));
  levels.forEach((l, i) => {
    const levelNum = moneyTree.length - i - 1;
    if (levelNum < gameState.currentQuestionIndex) {
      l.classList.add("completed");
    } else if (levelNum === gameState.currentQuestionIndex) {
      l.classList.add("current");
    }
  });
}

// Oyunu bitir
function endGame(won) {
  if (won) {
    showScreen(winScreen);
  } else {
    showScreen(loseScreen);
  }
}

// Sınıf seçimi
document.querySelectorAll(".class-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    gameState.selectedClass = btn.dataset.class;
    selectedClassDisplay.textContent = `${btn.dataset.class}. Sınıf`;
    showScreen(subjectScreen);
  });
});

// Konu seçimi
document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    gameState.selectedSubject = btn.dataset.subject;
    startGame();
  });
});

// Geri dön
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen(welcomeScreen);
  });
});
