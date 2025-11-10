// Oyunu Başlat
function startGame() {
    try {
        gameState.currentQuestion = 0;
        gameState.score = 0;
        gameState.jokers = { fifty: true, audience: true, phone: true };
        
        // Konu seçimine göre soruları filtrele
        let allQuestions = questionBank[gameState.selectedClass];
        
        if (gameState.selectedSubject === 'Karışık') {
            gameState.questions = shuffleArray([...allQuestions]);
        } else {
            // Sadece seçilen konudan soruları al
            const filteredQuestions = allQuestions.filter(q => q.subject === gameState.selectedSubject);
            gameState.questions = shuffleArray([...filteredQuestions]);
            
            // Eğer yeterli soru yoksa, tüm soruları kullan
            if (gameState.questions.length < 15) {
                gameState.questions = shuffleArray([...allQuestions]);
            }
        }
        
        createMoneyTree();
        updateJokers();
        
        // Oyun ekranına geçmeden önce güncellemeleri yap
        const selectedClassElement = document.getElementById('selectedClass');
        if (selectedClassElement) {
            selectedClassElement.textContent = `${gameState.selectedClass}. Sınıf`;
        }
        
        const currentSubjectElement = document.getElementById('currentSubject');
        if (currentSubjectElement) {
            currentSubjectElement.textContent = gameState.selectedSubject;
        }
        
        showScreen(gameScreen);
        loadQuestion();
    } catch (error) {
        console.error('Oyun başlatılırken hata oluştu:', error);
        alert('Oyun başlatılırken bir hata oluştu. Lütfen tekrar deneyin.');
    }
}

// Konu Seçimi
if (subjectBtns && subjectBtns.length > 0) {
    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.subject) {
                gameState.selectedSubject = btn.dataset.subject;
                console.log('Seçilen konu:', gameState.selectedSubject);
                startGame();
            } else {
                console.error('Konu butonunda data-subject özelliği eksik');
            }
        });
    });
} else {
    console.error('Konu butonları bulunamadı');
}