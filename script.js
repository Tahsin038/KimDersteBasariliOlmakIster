// Oyun Durumu
let gameState = {
    selectedClass: null,
    selectedTopic: null,
    currentQuestion: 0,
    score: 0,
    jokers: { fifty: true, audience: true, phone: true },
    questions: []
};

// Para Ağacı
const moneyTree = [
    { level: 1, amount: '1.000 ₺' },
    { level: 2, amount: '2.000 ₺' },
    { level: 3, amount: '3.000 ₺' },
    { level: 4, amount: '5.000 ₺' },
    { level: 5, amount: '10.000 ₺', safe: true },
    { level: 6, amount: '20.000 ₺' },
    { level: 7, amount: '40.000 ₺' },
    { level: 8, amount: '60.000 ₺' },
    { level: 9, amount: '80.000 ₺' },
    { level: 10, amount: '150.000 ₺', safe: true },
    { level: 11, amount: '250.000 ₺' },
    { level: 12, amount: '500.000 ₺' },
    { level: 13, amount: '750.000 ₺' },
    { level: 14, amount: '1.000.000 ₺' },
    { level: 15, amount: '5.000.000 ₺' }
];

// Soru Bankası - 5. Sınıf
const questions5 = [
    // Matematik Soruları
    { subject: 'Matematik', question: '15 + 27 işleminin sonucu kaçtır?', answers: ['42', '32', '52', '40'], correct: 0 },
    { subject: 'Matematik', question: '8 x 7 işleminin sonucu kaçtır?', answers: ['54', '56', '63', '48'], correct: 1 },
    { subject: 'Matematik', question: '100 - 37 işleminin sonucu kaçtır?', answers: ['63', '73', '53', '67'], correct: 0 },
    { subject: 'Matematik', question: 'Bir kenarı 4 cm olan karenin alanı kaç cm² dir?', answers: ['8', '12', '16', '20'], correct: 2 },
    { subject: 'Matematik', question: '36 ÷ 6 işleminin sonucu kaçtır?', answers: ['5', '6', '7', '8'], correct: 1 },
    { subject: 'Matematik', question: '3/4 + 1/4 işleminin sonucu kaçtır?', answers: ['1', '1/2', '2', '3/4'], correct: 0 },
    { subject: 'Matematik', question: '15 x 4 işleminin sonucu kaçtır?', answers: ['45', '50', '55', '60'], correct: 3 },
    { subject: 'Matematik', question: 'Bir yüzde 25 indirimli 60 TL olan ürünün indirimsiz fiyatı kaç TL\'dir?', answers: ['70', '75', '80', '85'], correct: 2 },
    
    // Türkçe Soruları
    { subject: 'Türkçe', question: 'Aşağıdakilerden hangisi bir isimdir?', answers: ['Koşmak', 'Kitap', 'Güzel', 'Hızlı'], correct: 1 },
    { subject: 'Türkçe', question: 'Aşağıdakilerden hangisi bir fiildir?', answers: ['Ev', 'Güzel', 'Koşmak', 'Masa'], correct: 2 },
    { subject: 'Türkçe', question: '"Kitap okumak" cümlesinde fiil hangisidir?', answers: ['Kitap', 'Okumak', 'Kitap okumak', 'Yok'], correct: 1 },
    { subject: 'Türkçe', question: 'Türkçe alfabesinde kaç harf vardır?', answers: ['26', '27', '28', '29'], correct: 3 },
    { subject: 'Türkçe', question: 'Aşağıdaki kelimelerden hangisi yapım eki almıştır?', answers: ['Evim', 'Kalem', 'Kitapçı', 'Güzel'], correct: 2 },
    
    // Fen Bilgisi Soruları
    { subject: 'Fen Bilgisi', question: 'Çiçeklerin tozlaşmasında hangi canlılar rol oynar?', answers: ['Balıklar', 'Arılar', 'Yılanlar', 'Kedi'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Güneş sisteminde kaç gezegen vardır?', answers: ['7', '8', '9', '10'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Suyun kaynama sıcaklığı kaç derecedir?', answers: ['50°C', '75°C', '100°C', '150°C'], correct: 2 },
    { subject: 'Fen Bilgisi', question: 'Bitkilerin yeşil renkte olmalarını sağlayan madde hangisidir?', answers: ['Oksijen', 'Klorofil', 'Karbon', 'Nitrojen'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Hangi organımız kanı temizler?', answers: ['Akciğer', 'Karaciğer', 'Böbrek', 'Kalp'], correct: 2 },
    
    // Sosyal Bilgiler Soruları
    { subject: 'Sosyal Bilgiler', question: 'Türkiye\'nin başkenti neresidir?', answers: ['İstanbul', 'İzmir', 'Ankara', 'Antalya'], correct: 2 },
    { subject: 'Sosyal Bilgiler', question: 'Cumhuriyet kaç yılında ilan edilmiştir?', answers: ['1920', '1921', '1922', '1923'], correct: 3 },
    { subject: 'Sosyal Bilgiler', question: 'Atatürk\'ün doğum yılı hangisidir?', answers: ['1881', '1880', '1882', '1883'], correct: 0 },
    { subject: 'Sosyal Bilgiler', question: 'Türkiye\'nin en uzun nehri hangisidir?', answers: ['Kızılırmak', 'Yeşilırmak', 'Sakarya', 'Fırat'], correct: 0 },
    { subject: 'Sosyal Bilgiler', question: 'İlk Türk devleti hangisidir?', answers: ['Osmanlı İmparatorluğu', 'Büyük Selçuklu Devleti', 'Hun Devleti', 'Göktürk Devleti'], correct: 2 }
];

// 6. Sınıf
const questions6 = [
    { subject: 'Matematik', question: '15 x 12 işleminin sonucu kaçtır?', answers: ['160', '170', '180', '190'], correct: 2 },
    { subject: 'Türkçe', question: 'Aşağıdakilerden hangisi bir zıt anlamlı kelimedir? (Açık - ...)', answers: ['Kapalı', 'Geniş', 'Parlak', 'Büyük'], correct: 0 },
    { subject: 'Fen Bilgisi', question: 'Kalbin görevi nedir?', answers: ['Solunum', 'Sindirim', 'Kan pompalama', 'Filtreleme'], correct: 2 },
    { subject: 'Sosyal Bilgiler', question: 'Marmara Bölgesinde hangi deniz bulunur?', answers: ['Karadeniz', 'Akdeniz', 'Marmara Denizi', 'Ege Denizi'], correct: 2 },
    { subject: 'Matematik', question: '3/4 + 1/4 işleminin sonucu kaçtır?', answers: ['1', '1/2', '2', '3/2'], correct: 0 },
    { subject: 'Türkçe', question: 'Edat hangi kelime grubundandır?', answers: ['Fiil', 'Isim', 'Sıfat', 'Yardımcı kelime'], correct: 3 },
    { subject: 'Fen Bilgisi', question: 'Ses hangi ortamda en hızlı yayılır?', answers: ['Hava', 'Su', 'Katı', 'Boşluk'], correct: 2 },
    { subject: 'Sosyal Bilgiler', question: 'Türkiye kaç coğrafi bölgeye ayrılır?', answers: ['5', '6', '7', '8'], correct: 2 },
    { subject: 'Matematik', question: '144 sayısının karekökü kaçtır?', answers: ['10', '11', '12', '13'], correct: 2 },
    { subject: 'Türkçe', question: '"Kitabı" kelimesinde kaç hece vardır?', answers: ['2', '3', '4', '5'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Atmosferdeki oksijen oranı yaklaşık yüzde kaçtır?', answers: ['21', '50', '78', '90'], correct: 0 },
    { subject: 'Sosyal Bilgiler', question: 'Türkiye\'nin en uzun nehri hangisidir?', answers: ['Sakarya', 'Kızılırmak', 'Fırat', 'Dicle'], correct: 1 },
    { subject: 'Matematik', question: 'Bir üçgenin iç açıları toplamı kaç derecedir?', answers: ['90', '180', '270', '360'], correct: 1 },
    { subject: 'Türkçe', question: 'Mecaz anlamlı kullanım hangisidir?', answers: ['Güneş doğdu', 'Yüreğim yandı', 'Kitap okudum', 'Su içtim'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Ay\'\u0131n Dünya etrafında dönme süresi yaklaşık kaç gündür?', answers: ['7', '15', '28', '365'], correct: 2 }
];

// 7. Sınıf
const questions7 = [
    { subject: 'Matematik', question: '(-5) x (-3) işleminin sonucu kaçtır?', answers: ['-15', '15', '-8', '8'], correct: 1 },
    { subject: 'Türkçe', question: 'Devrik cümle hangisidir?', answers: ['Ali okula gitti', 'Okula Ali gitti', 'Ali gitti', 'Okul açıldı'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Hücrelerin enerji üretim merkezi hangisidir?', answers: ['Çekirdek', 'Mitokondri', 'Ribozom', 'Golgi'], correct: 1 },
    { subject: 'Sosyal Bilgiler', question: 'Selçuklular hangi savaşla Anadolu\'ya girmiştir?', answers: ['Malazgirt', 'Koçhisar', 'Miryokefalon', 'İnönü'], correct: 0 },
    { subject: 'Matematik', question: '2⁴ (2 üzeri 4) işleminin sonucu kaçtır?', answers: ['8', '12', '16', '20'], correct: 2 },
    { subject: 'Türkçe', question: '"Koşar adımlarla geldi" cümlesinde "koşar adımlarla" ne görevindedir?', answers: ['Belirteç', 'Özne', 'Nesne', 'Yüklem'], correct: 0 },
    { subject: 'Fen Bilgisi', question: 'Perdeğe hangi duyu organının parçasıdır?', answers: ['Göz', 'Kulak', 'Burun', 'Dil'], correct: 1 },
    { subject: 'Sosyal Bilgiler', question: 'Büyük Selçuklu Devleti\'nin kurucusu kimdir?', answers: ['Tuğrul Bey', 'Alp Arslan', 'Melikşah', 'Osman Bey'], correct: 0 },
    { subject: 'Matematik', question: 'x + 15 = 30 denkleminde x kaçtır?', answers: ['10', '15', '20', '25'], correct: 1 },
    { subject: 'Türkçe', question: 'Yağmur yağarken evin içindeydim. Bu cümle hangi tür cümledir?', answers: ['Sıralı', 'İç içe', 'Birleşik', 'Basit'], correct: 2 },
    { subject: 'Fen Bilgisi', question: 'Kimyasal enerji hangi olayda ısı enerjisine dönüşür?', answers: ['Yanma', 'Erime', 'Buharlaşma', 'İletim'], correct: 0 },
    { subject: 'Sosyal Bilgiler', question: 'İlk Türk-İslam devleti hangisidir?', answers: ['Selçuklular', 'Osmanlı', 'Karahanlılar', 'Göktürkler'], correct: 2 },
    { subject: 'Matematik', question: 'Bir dairenin çevresini bulmak için hangi formül kullanılır?', answers: ['2πr', 'πr²', '4πr', 'r²'], correct: 0 },
    { subject: 'Türkçe', question: 'Anlamca karşıt cümleler hangi bağlaçla bağlanır?', answers: ['Ve', 'Ama', 'Çünkü', 'Veya'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Kimyasal tepkimelerde maddenin toplam kütlesi nasıl değişir?', answers: ['Artar', 'Azalır', 'Değişmez', 'Yarıya iner'], correct: 2 }
];

// 8. Sınıf  
const questions8 = [
    { subject: 'Matematik', question: '(x + 3)(x - 2) çarpımının açılımı nedir?', answers: ['x² + x - 6', 'x² - x + 6', 'x² + x + 6', 'x² - x - 6'], correct: 0 },
    { subject: 'Türkçe', question: 'Sıfat-fiil eki hangisidir?', answers: ['-miş', '-an', '-ecek', 'Hepsi'], correct: 3 },
    { subject: 'Fen Bilgisi', question: 'DNA\'nın açılımı nedir?', answers: ['Deoksiribonukleik asit', 'Dinamik asit', 'Demir nitrat asit', 'Derin atom'], correct: 0 },
    { subject: 'Sosyal Bilgiler', question: 'İstanbul\'un fethi hangi yılda gerçekleşmiştir?', answers: ['1451', '1453', '1455', '1461'], correct: 1 },
    { subject: 'Matematik', question: '5! (5 faktöriyel) değeri kaçtır?', answers: ['20', '60', '100', '120'], correct: 3 },
    { subject: 'Türkçe', question: 'Hangi cümlede özne gizlidir?', answers: ['Ali geldi', 'Kitap okudum', 'Sen gittin', 'Kedi uyuyor'], correct: 1 },
    { subject: 'Fen Bilgisi', question: 'Periyodik tabloda ilk element hangisidir?', answers: ['Helyum', 'Hidrojen', 'Lityum', 'Oksijen'], correct: 1 },
    { subject: 'Sosyal Bilgiler', question: 'Birinci Dünya Savaşı hangi yıllar arasında olmuştur?', answers: ['1912-1913', '1914-1918', '1919-1922', '1939-1945'], correct: 1 },
    { subject: 'Matematik', question: 'Pisagor teoremi hangi üçgenler için geçerlidir?', answers: ['Dik üçgen', 'Eşkenar üçgen', 'Geniş açılı', 'Tüm üçgenler'], correct: 0 },
    { subject: 'Türkçe', question: 'Hangi kelime türetülmemiştir?', answers: ['Gök', 'Gökçe', 'Göksel', 'Gökbilimci'], correct: 0 },
    { subject: 'Fen Bilgisi', question: 'İnçe bağırsak sindirim sisteminin hangi parçasında bulunur?', answers: ['Ağız', 'Mide', 'Barşaklar', 'Yemek borusu'], correct: 2 },
    { subject: 'Sosyal Bilgiler', question: 'Atatürk\'\u00fcn M.K.E.M.\'deki ilk konuşması hangi yılda yapılmıştır?', answers: ['1919', '1920', '1921', '1923'], correct: 0 },
    { subject: 'Matematik', question: 'log₁₀100 değeri kaçtır?', answers: ['1', '2', '10', '100'], correct: 1 },
    { subject: 'Türkçe', question: '"Kitap okumayı çok severim" cümlesinde nesne hangisidir?', answers: ['Kitap', 'Okumayı', 'Kitap okumayı', 'Çok'], correct: 2 },
    { subject: 'Fen Bilgisi', question: 'Bir cismin potansiyel enerjisi hangi değişkenlere bağlıdır?', answers: ['Kütle ve hız', 'Kütle ve yükseklik', 'Hız ve zaman', 'Sadece kütle'], correct: 1 }
];

const questionBank = { 5: questions5, 6: questions6, 7: questions7, 8: questions8 };

// DOM Elementleri
const welcomeScreen = document.getElementById('welcomeScreen');
const topicScreen = document.getElementById('topicScreen');
const gameScreen = document.getElementById('gameScreen');
const winScreen = document.getElementById('winScreen');
const loseScreen = document.getElementById('loseScreen');
const jokerModal = document.getElementById('jokerModal');

const classBtns = document.querySelectorAll('.class-btn');
const answerBtns = document.querySelectorAll('.answer-btn');
const joker5050Btn = document.getElementById('joker5050');
const jokerAudienceBtn = document.getElementById('jokerAudience');
const jokerPhoneBtn = document.getElementById('jokerPhone');
const returnToMainBtn = document.getElementById('returnToMain');
const playAgainWinBtn = document.getElementById('playAgainWin');
const playAgainLoseBtn = document.getElementById('playAgainLose');
const closeModalBtn = document.getElementById('closeModal');
const backToClassBtn = document.getElementById('backToClass');
const topicBtns = document.querySelectorAll('.topic-btn');

// Yardımcı Fonksiyonlar
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function showModal(title, message) {
    document.getElementById('jokerTitle').textContent = title;
    document.getElementById('jokerMessage').textContent = message;
    jokerModal.classList.add('active');
}

// Para Ağacını Oluştur
function createMoneyTree() {
    const moneyLevels = document.getElementById('moneyLevels');
    moneyLevels.innerHTML = '';
    
    moneyTree.forEach((level, index) => {
        const div = document.createElement('div');
        div.className = 'money-level';
        if (level.safe) div.classList.add('safe');
        div.textContent = `${level.level}. ${level.amount}`;
        div.dataset.level = index;
        moneyLevels.appendChild(div);
    });
}

// Para Ağacını Güncelle
function updateMoneyTree() {
    document.querySelectorAll('.money-level').forEach((level, index) => {
        level.classList.remove('current', 'completed');
        if (index === gameState.currentQuestion) {
            level.classList.add('current');
        } else if (index < gameState.currentQuestion) {
            level.classList.add('completed');
        }
    });
}

// Jokerları Güncelle
function updateJokers() {
    joker5050Btn.disabled = !gameState.jokers.fifty;
    jokerAudienceBtn.disabled = !gameState.jokers.audience;
    jokerPhoneBtn.disabled = !gameState.jokers.phone;
    
    const remaining = Object.values(gameState.jokers).filter(j => j).length;
    document.getElementById('remainingJokers').textContent = remaining;
}

// Sınıf Seçimi
classBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        gameState.selectedClass = btn.dataset.class;
        showScreen(topicScreen);
    });
});

// Konu Seçimi
topicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        gameState.selectedTopic = btn.dataset.topic;
        startGame();
    });
});

// Sınıf seçimine geri dön
backToClassBtn.addEventListener('click', () => {
    showScreen(welcomeScreen);
});

// Soruları konuya göre filtrele
function filterQuestionsByTopic(questions, topic) {
    if (topic === 'karisik') {
        return questions; // Tüm sorular
    }
    
    // Konu isimlerini eşleştir
    const topicMap = {
        'matematik': 'Matematik',
        'turkce': 'Türkçe',
        'fen': 'Fen Bilgisi',
        'sosyal': 'Sosyal Bilgiler'
    };
    
    const topicName = topicMap[topic];
    return questions.filter(q => q.subject === topicName);
}

// Soruları konuya göre filtrele ve yeterlilik kontrolü yap
function getQuestionsForGame() {
    let questions = [...questionBank[gameState.selectedClass]];
    
    // Eğer karışık mod değilse, konuya göre filtrele
    if (gameState.selectedTopic !== 'karisik') {
        questions = filterQuestionsByTopic(questions, gameState.selectedTopic);
        
        // Eğer yeterli soru yoksa kullanıcıyı bilgilendir ve karışık moda geç
        if (questions.length < 15) {
            showModal('Bilgi', `Seçtiğiniz konuya ait sadece ${questions.length} soru bulundu. Karışık moda geçiliyor.`);
            questions = [...questionBank[gameState.selectedClass]]; // Tüm soruları al
        }
    }
    
    // Soruları karıştır ve 15 soru seç
    return shuffleArray(questions).slice(0, 15);
}

// Oyunu Başlat
function startGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.jokers = { fifty: true, audience: true, phone: true };
    
    // Soruları al
    gameState.questions = getQuestionsForGame();
    
    createMoneyTree();
    updateJokers();
    showScreen(gameScreen);
    
    // Sınıf ve konu bilgisini güncelle
    document.getElementById('selectedClass').textContent = `${gameState.selectedClass}. Sınıf`;
    const topicName = {
        'matematik': 'Matematik',
        'turkce': 'Türkçe',
        'fen': 'Fen Bilgisi',
        'sosyal': 'Sosyal Bilgiler',
        'karisik': 'Karışık'
    }[gameState.selectedTopic];
    document.getElementById('currentSubject').textContent = topicName;
    loadQuestion();
}

// Soruyu Yükle
function loadQuestion() {
    const question = gameState.questions[gameState.currentQuestion];
    
    document.getElementById('questionNumber').textContent = gameState.currentQuestion + 1;
    document.getElementById('currentSubject').textContent = question.subject;
    document.getElementById('questionText').textContent = question.question;
    
    answerBtns.forEach((btn, index) => {
        btn.classList.remove('correct', 'wrong', 'hidden');
        btn.disabled = false;
        const answerText = btn.querySelector('.answer-text');
        answerText.textContent = question.answers[index];
    });
    
    updateMoneyTree();
}

// Cevap Seçimi
answerBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        checkAnswer(index);
    });
});

function checkAnswer(selectedIndex) {
    const question = gameState.questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    // Tüm butonları devre dışı bırak
    answerBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        answerBtns[selectedIndex].classList.add('correct');
        
        setTimeout(() => {
            gameState.currentQuestion++;
            
            // Oyun bitti mi kontrol et
            if (gameState.currentQuestion >= 15) {
                endGame(true);
            } else {
                loadQuestion();
            }
        }, 1500);
    } else {
        answerBtns[selectedIndex].classList.add('wrong');
        answerBtns[question.correct].classList.add('correct');
        
        setTimeout(() => {
            endGame(false);
        }, 2000);
    }
}

// 50:50 Jokeri
joker5050Btn.addEventListener('click', () => {
    if (!gameState.jokers.fifty) return;
    
    gameState.jokers.fifty = false;
    updateJokers();
    
    const question = gameState.questions[gameState.currentQuestion];
    const wrongAnswers = [];
    
    answerBtns.forEach((btn, index) => {
        if (index !== question.correct) {
            wrongAnswers.push(index);
        }
    });
    
    // Rastgele 2 yanlış cevabı gizle
    const shuffled = shuffleArray(wrongAnswers);
    shuffled.slice(0, 2).forEach(index => {
        answerBtns[index].classList.add('hidden');
    });
    
    showModal('50:50 Jokeri', 'İki yanlış cevap elendi!');
});

// Seyirci Jokeri
jokerAudienceBtn.addEventListener('click', () => {
    if (!gameState.jokers.audience) return;
    
    gameState.jokers.audience = false;
    updateJokers();
    
    const question = gameState.questions[gameState.currentQuestion];
    const percentages = [0, 0, 0, 0];
    
    // Doğru cevaba yüksek yüzde ver (50-70 arası)
    percentages[question.correct] = 50 + Math.floor(Math.random() * 21);
    
    // Kalan yüzdeleri dağıt
    let remaining = 100 - percentages[question.correct];
    for (let i = 0; i < 4; i++) {
        if (i !== question.correct) {
            if (remaining > 0) {
                const amount = Math.floor(Math.random() * (remaining / 2));
                percentages[i] = amount;
                remaining -= amount;
            }
        }
    }
    
    // Son kalan yüzdeyi rastgele bir yanlış cevaba ekle
    if (remaining > 0) {
        const wrongIndices = [0, 1, 2, 3].filter(i => i !== question.correct);
        const randomWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
        percentages[randomWrong] += remaining;
    }
    
    const message = `Seyirci oylaması:\n\nA: %${percentages[0]}\nB: %${percentages[1]}\nC: %${percentages[2]}\nD: %${percentages[3]}`;
    showModal('Seyirci Jokeri', message);
});

// Telefon Jokeri
jokerPhoneBtn.addEventListener('click', () => {
    if (!gameState.jokers.phone) return;
    
    gameState.jokers.phone = false;
    updateJokers();
    
    const question = gameState.questions[gameState.currentQuestion];
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[question.correct];
    
    // %80 ihtimalle doğru cevabı söyle
    const isCorrectAdvice = Math.random() < 0.8;
    const advice = isCorrectAdvice ? correctLetter : letters[Math.floor(Math.random() * 4)];
    
    const message = `Arkadaşınız: "Bence cevap ${advice} şıkkı olabilir. Ama tam emin değilim.")`;
    showModal('Telefon Jokeri', message);
});

// Modal Kapat
closeModalBtn.addEventListener('click', () => {
    jokerModal.classList.remove('active');
});

// Oyun Sonu
function endGame(won) {
    let prize = '0 ₺';
    
    if (won) {
        prize = moneyTree[14].amount;
        document.getElementById('winAmount').textContent = prize;
        showScreen(winScreen);
    } else {
        // Güvenli noktalara göre para hesapla
        if (gameState.currentQuestion >= 10) {
            prize = moneyTree[9].amount; // 150.000 ₺
        } else if (gameState.currentQuestion >= 5) {
            prize = moneyTree[4].amount; // 10.000 ₺
        }
        document.getElementById('loseAmount').textContent = prize;
        showScreen(loseScreen);
    }
}

// Ana Sayfaya Dön
returnToMainBtn.addEventListener('click', () => {
    if (confirm('Oyunu sonlandırıp ana sayfaya dönmek istediğinize emin misiniz?')) {
        showScreen(welcomeScreen);
    }
});

// Tekrar Oyna
playAgainWinBtn.addEventListener('click', () => {
    showScreen(welcomeScreen);
});

playAgainLoseBtn.addEventListener('click', () => {
    showScreen(welcomeScreen);
});