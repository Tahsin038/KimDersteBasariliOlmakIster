// --- Oyunun Durumu ---
const gameState = {
    playerName: "",
    grade: "",
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
};

// --- Ekran Elementleri ---
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const nameInput = document.getElementById("name");
const gradeSelect = document.getElementById("grade");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-btn");

// --- Soru Havuzu ---
const allQuestions = [
    {
        grade: "9",
        question: "Türkiye'nin başkenti neresidir?",
        answers: ["İstanbul", "Ankara", "İzmir", "Bursa"],
        correct: 1
    },
    {
        grade: "9",
        question: "Elektron hangi yüke sahiptir?",
        answers: ["Pozitif", "Negatif", "Nötr", "Değişken"],
        correct: 1
    },
    {
        grade: "10",
        question: "Işık yılı nedir?",
        answers: ["Zaman birimi", "Mesafe birimi", "Hız birimi", "Enerji birimi"],
        correct: 1
    },
    {
        grade: "11",
        question: "OHM yasası neyi açıklar?",
        answers: ["Direnç", "Akım", "Gerilim ve akım ilişkisini", "Kuvvet"],
        correct: 2
    },
    {
        grade: "12",
        question: "Fotosentezde hangi gaz kullanılır?",
        answers: ["Oksijen", "Azot", "Karbondioksit", "Hidrojen"],
        correct: 2
    },
];

// --- Ekran Geçişleri ---
function showScreen(screen) {
    startScreen.style.display = "none";
    gameScreen.style.display = "none";
    resultScreen.style.display = "none";
    screen.style.display = "block";
}

// --- Soruları Karıştırma ---
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// --- Oyunu Başlat ---
function startGame() {
    const name = nameInput.value.trim();
    const grade = gradeSelect.value;

    if (!name || !grade) {
        alert("Lütfen adınızı ve sınıfınızı girin!");
        return;
    }

    gameState.playerName = name;
    gameState.grade = grade;
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;

    const filteredQuestions = allQuestions.filter(q => q.grade === grade);
    if (filteredQuestions.length === 0) {
        alert("Bu sınıfa ait soru bulunamadı!");
        return;
    }

    gameState.questions = shuffleArray([...filteredQuestions]);

    showScreen(gameScreen);
    showQuestion();
}

// --- Soruyu Göster ---
function showQuestion() {
    resetState();
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

// --- Önceki Durumu Temizle ---
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

// --- Cevap Seçildiğinde ---
function selectAnswer(index) {
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach((button, i) => {
        button.disabled = true;
        if (i === currentQuestion.correct) {
            button.classList.add("correct");
        } else if (i === index && i !== currentQuestion.correct) {
            button.classList.add("wrong");
        }
    });

    if (index === currentQuestion.correct) {
        gameState.score++;
    }

    nextButton.style.display = "block";
}

// --- Sonraki Soru veya Sonuç ---
nextButton.addEventListener("click", () => {
    gameState.currentQuestionIndex++;
    if (gameState.currentQuestionIndex < gameState.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// --- Sonucu Göster ---
function showResult() {
    showScreen(resultScreen);
    resultText.innerHTML = `
        <h2>Tebrikler ${gameState.playerName}!</h2>
        <p>Doğru sayısı: ${gameState.score} / ${gameState.questions.length}</p>
    `;
}

// --- Oyunu Yeniden Başlat ---
function restartGame() {
    showScreen(startScreen);
    nameInput.value = "";
    gradeSelect.value = "";
}

restartButton.addEventListener("click", restartGame);

// --- Başlatma Butonu (HTML'de id="start-btn" olmalı) ---
document.getElementById("start-btn").addEventListener("click", startGame);
