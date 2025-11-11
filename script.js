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

// Cevap Seçimi - Bu kısım aşağıda yeni özelliklerle birlikte tanımlanacak
// answerBtns.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//         checkAnswer(index);
//     });
// });

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

// ============================================
// YENİ ÖZELLİKLER
// ============================================

// Ses Sistemi
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;
let musicEnabled = true;
let timerDuration = 30;
let timerInterval = null;
let timeLeft = timerDuration;

// Geliştirilmiş ses efektleri (Web Audio API ile)
function playSound(type) {
    if (!soundEnabled) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const oscillator2 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            // Melodik doğru cevap sesi
            oscillator.type = 'sine';
            oscillator.frequency.value = 523.25; // C5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            
            // İkinci nota
            oscillator2.connect(gainNode2);
            gainNode2.connect(audioContext.destination);
            oscillator2.type = 'sine';
            oscillator2.frequency.value = 659.25; // E5
            gainNode2.gain.setValueAtTime(0.2, audioContext.currentTime + 0.15);
            gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator2.start(audioContext.currentTime + 0.15);
            oscillator2.stop(audioContext.currentTime + 0.5);
            break;
            
        case 'wrong':
            // Dramatik yanlış cevap sesi
            oscillator.type = 'sawtooth';
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);
            break;
            
        case 'joker':
            // Eğlenceli joker sesi
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
            
        case 'win':
            // Zafer melodisi
            const notes = [523.25, 587.33, 659.25, 783.99]; // C5, D5, E5, G5
            notes.forEach((freq, index) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.3);
                osc.start(audioContext.currentTime + index * 0.15);
                osc.stop(audioContext.currentTime + index * 0.15 + 0.3);
            });
            break;
            
        case 'tick':
            // Kısa tik sesi
            oscillator.type = 'sine';
            oscillator.frequency.value = 880;
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
    }
}

// DOM Elementleri - Yeni Özellikler
const soundToggle = document.getElementById('soundToggle');
const musicToggle = document.getElementById('musicToggle');
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');
const soundEffectsToggle = document.getElementById('soundEffectsToggle');
const backgroundMusicToggle = document.getElementById('backgroundMusicToggle');
const timerDurationSelect = document.getElementById('timerDuration');
const timerDisplay = document.getElementById('timer');
const viewAchievements = document.getElementById('viewAchievements');
const viewStats = document.getElementById('viewStats');
const achievementsModal = document.getElementById('achievementsModal');
const closeAchievements = document.getElementById('closeAchievements');
const statsModal = document.getElementById('statsModal');
const closeStats = document.getElementById('closeStats');

// Süre Sayacı Fonksiyonları
function startTimer() {
    if (timerDuration === 0) return; // Sınırsız mod
    
    timeLeft = timerDuration;
    timerDisplay.textContent = timeLeft;
    timerDisplay.classList.remove('warning');
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 10) {
            timerDisplay.classList.add('warning');
            playSound('tick');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showModal('Süre Doldu!', 'Zamanınız doldu. Yanlış cevap sayılıyor.');
            setTimeout(() => {
                endGame(false);
            }, 2000);
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Başarımlar Sistemi
const achievements = [
    { id: 'first_win', name: 'İlk Zafer', desc: 'İlk oyununu kazan', icon: '🏆', unlocked: false },
    { id: 'no_joker', name: 'Joker Yok', desc: 'Hiç joker kullanmadan kazan', icon: '🎯', unlocked: false },
    { id: 'speed_demon', name: 'Hız Canavarı', desc: '5 soruyu 10 saniyede cevapla', icon: '⚡', unlocked: false },
    { id: 'perfect_score', name: 'Mükemmel Skor', desc: '15 soruyu doğru cevapla', icon: '💯', unlocked: false },
    { id: 'math_master', name: 'Matematik Ustası', desc: 'Matematik konusunda kazan', icon: '🔢', unlocked: false },
    { id: 'language_expert', name: 'Dil Uzmanı', desc: 'Türkçe konusunda kazan', icon: '📚', unlocked: false },
    { id: 'science_genius', name: 'Fen Dehası', desc: 'Fen Bilgisi konusunda kazan', icon: '🔬', unlocked: false },
    { id: 'history_buff', name: 'Tarih Bilgini', desc: 'Sosyal Bilgiler konusunda kazan', icon: '🏛️', unlocked: false }
];

// İstatistikler
let stats = {
    totalGames: 0,
    totalWins: 0,
    totalMoney: 0,
    correctAnswers: 0,
    totalAnswers: 0
};

// LocalStorage'dan verileri yükle
function loadData() {
    const savedAchievements = localStorage.getItem('achievements');
    const savedStats = localStorage.getItem('stats');
    const savedSettings = localStorage.getItem('settings');
    
    if (savedAchievements) {
        const loaded = JSON.parse(savedAchievements);
        loaded.forEach(saved => {
            const achievement = achievements.find(a => a.id === saved.id);
            if (achievement) achievement.unlocked = saved.unlocked;
        });
    }
    
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
    
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        soundEnabled = settings.soundEnabled !== undefined ? settings.soundEnabled : true;
        musicEnabled = settings.musicEnabled !== undefined ? settings.musicEnabled : true;
        timerDuration = settings.timerDuration !== undefined ? settings.timerDuration : 30;
        
        soundEffectsToggle.checked = soundEnabled;
        backgroundMusicToggle.checked = musicEnabled;
        timerDurationSelect.value = timerDuration;
        
        updateControlButtons();
    }
}

// Verileri kaydet
function saveData() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('stats', JSON.stringify(stats));
    localStorage.setItem('settings', JSON.stringify({
        soundEnabled,
        musicEnabled,
        timerDuration
    }));
}

// Başarım kilidi aç
function unlockAchievement(id) {
    const achievement = achievements.find(a => a.id === id);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        playSound('win');
        showModal('🎉 Başarım Kazanıldı!', `${achievement.icon} ${achievement.name}: ${achievement.desc}`);
        saveData();
    }
}

// Başarımları göster
function displayAchievements() {
    const list = document.getElementById('achievementsList');
    list.innerHTML = '';
    
    achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = `achievement-item ${achievement.unlocked ? '' : 'locked'}`;
        item.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
        `;
        list.appendChild(item);
    });
}

// İstatistikleri göster
function displayStats() {
    document.getElementById('totalGames').textContent = stats.totalGames;
    document.getElementById('totalWins').textContent = stats.totalWins;
    document.getElementById('totalMoney').textContent = stats.totalMoney.toLocaleString('tr-TR') + ' ₺';
    const percentage = stats.totalAnswers > 0 ? Math.round((stats.correctAnswers / stats.totalAnswers) * 100) : 0;
    document.getElementById('correctAnswers').textContent = percentage + '%';
}

// Kontrol butonlarını güncelle
function updateControlButtons() {
    if (soundEnabled) {
        soundToggle.classList.remove('muted');
        soundToggle.querySelector('.icon').textContent = '🔊';
    } else {
        soundToggle.classList.add('muted');
        soundToggle.querySelector('.icon').textContent = '🔇';
    }
    
    if (musicEnabled) {
        musicToggle.classList.remove('muted');
        musicToggle.querySelector('.icon').textContent = '🎵';
    } else {
        musicToggle.classList.add('muted');
        musicToggle.querySelector('.icon').textContent = '🔇';
    }
}

// Event Listeners - Yeni Özellikler
soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundEffectsToggle.checked = soundEnabled;
    updateControlButtons();
    saveData();
});

musicToggle.addEventListener('click', () => {
    musicEnabled = !musicEnabled;
    backgroundMusicToggle.checked = musicEnabled;
    updateControlButtons();
    saveData();
});

settingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
});

closeSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
});

soundEffectsToggle.addEventListener('change', (e) => {
    soundEnabled = e.target.checked;
    updateControlButtons();
    saveData();
});

backgroundMusicToggle.addEventListener('change', (e) => {
    musicEnabled = e.target.checked;
    updateControlButtons();
    saveData();
});

timerDurationSelect.addEventListener('change', (e) => {
    timerDuration = parseInt(e.target.value);
    saveData();
});

viewAchievements.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    displayAchievements();
    achievementsModal.classList.add('active');
});

closeAchievements.addEventListener('click', () => {
    achievementsModal.classList.remove('active');
});

viewStats.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    displayStats();
    statsModal.classList.add('active');
});

closeStats.addEventListener('click', () => {
    statsModal.classList.remove('active');
});

// Cevap butonları için event listener'lar (ses ve istatistik desteği ile)
answerBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        stopTimer();
        stats.totalAnswers++;
        
        const question = gameState.questions[gameState.currentQuestion];
        const isCorrect = index === question.correct;
        
        if (isCorrect) {
            stats.correctAnswers++;
            playSound('correct');
        } else {
            playSound('wrong');
        }
        
        saveData();
        checkAnswer(index);
    });
});

// loadQuestion fonksiyonunu override et (süre sayacı ile)
const _originalLoadQuestion = loadQuestion;
loadQuestion = function() {
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
    startTimer(); // Süreyi başlat
};

// endGame fonksiyonunu override et
const _originalEndGame = endGame;
endGame = function(won) {
    stopTimer();
    stats.totalGames++;
    
    let finalScore = 0;
    let prize = '0 ₺';
    
    if (won) {
        stats.totalWins++;
        finalScore = 5000000;
        stats.totalMoney += finalScore;
        prize = moneyTree[14].amount;
        playSound('win');
        unlockAchievement('first_win');
        unlockAchievement('perfect_score');
        
        // Joker kullanılmadıysa
        if (gameState.jokers.fifty && gameState.jokers.audience && gameState.jokers.phone) {
            unlockAchievement('no_joker');
        }
        
        // Konuya özel başarımlar
        if (gameState.selectedTopic === 'matematik') unlockAchievement('math_master');
        if (gameState.selectedTopic === 'turkce') unlockAchievement('language_expert');
        if (gameState.selectedTopic === 'fen') unlockAchievement('science_genius');
        if (gameState.selectedTopic === 'sosyal') unlockAchievement('history_buff');
        
        document.getElementById('winAmount').textContent = prize;
        showScreen(winScreen);
    } else {
        // Güvenli noktalara göre para hesapla
        if (gameState.currentQuestion >= 10) {
            finalScore = 150000;
            prize = moneyTree[9].amount;
            stats.totalMoney += finalScore;
        } else if (gameState.currentQuestion >= 5) {
            finalScore = 10000;
            prize = moneyTree[4].amount;
            stats.totalMoney += finalScore;
        }
        document.getElementById('loseAmount').textContent = prize;
        showScreen(loseScreen);
    }
    
    // Liderlik tablosuna ekle
    const playerName = prompt('Liderlik tablosuna eklemek için adınızı girin:', 'Oyuncu') || 'Anonim';
    const topicNames = {
        'matematik': 'Matematik',
        'turkce': 'Türkçe',
        'fen': 'Fen Bilgisi',
        'sosyal': 'Sosyal Bilgiler',
        'karisik': 'Karışık'
    };
    
    addToLeaderboard(
        playerName,
        gameState.selectedClass,
        topicNames[gameState.selectedTopic],
        finalScore,
        gameState.currentQuestion
    );
    
    saveData();
};

// Joker kullanımında ses çal
const originalJoker5050 = joker5050Btn.onclick;
joker5050Btn.addEventListener('click', () => {
    if (gameState.jokers.fifty) {
        playSound('joker');
    }
});

const originalJokerAudience = jokerAudienceBtn.onclick;
jokerAudienceBtn.addEventListener('click', () => {
    if (gameState.jokers.audience) {
        playSound('joker');
    }
});

const originalJokerPhone = jokerPhoneBtn.onclick;
jokerPhoneBtn.addEventListener('click', () => {
    if (gameState.jokers.phone) {
        playSound('joker');
    }
});

// Liderlik Tablosu Sistemi
const leaderboardModal = document.getElementById('leaderboardModal');
const viewLeaderboard = document.getElementById('viewLeaderboard');
const closeLeaderboard = document.getElementById('closeLeaderboard');
const filterBtns = document.querySelectorAll('.filter-btn');

let leaderboard = [];
let currentFilter = 'all';

// Liderlik tablosunu yükle
function loadLeaderboard() {
    const saved = localStorage.getItem('leaderboard');
    if (saved) {
        leaderboard = JSON.parse(saved);
    }
}

// Liderlik tablosunu kaydet
function saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Liderlik tablosuna skor ekle
function addToLeaderboard(playerName, classLevel, topic, score, correctAnswers) {
    const entry = {
        name: playerName,
        class: classLevel,
        topic: topic,
        score: score,
        correctAnswers: correctAnswers,
        date: new Date().toLocaleDateString('tr-TR')
    };
    
    leaderboard.push(entry);
    leaderboard.sort((a, b) => b.score - a.score);
    
    // En fazla 100 kayıt tut
    if (leaderboard.length > 100) {
        leaderboard = leaderboard.slice(0, 100);
    }
    
    saveLeaderboard();
}

// Liderlik tablosunu göster
function displayLeaderboard(filter = 'all') {
    const list = document.getElementById('leaderboardList');
    list.innerHTML = '';
    
    let filteredData = leaderboard;
    if (filter !== 'all') {
        filteredData = leaderboard.filter(entry => entry.class === filter);
    }
    
    if (filteredData.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Henüz kayıt yok</p>';
        return;
    }
    
    filteredData.slice(0, 50).forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = `leaderboard-item ${index < 3 ? 'top-3' : ''}`;
        
        let rankClass = '';
        let rankIcon = '';
        if (index === 0) {
            rankClass = 'gold';
            rankIcon = '🥇';
        } else if (index === 1) {
            rankClass = 'silver';
            rankIcon = '🥈';
        } else if (index === 2) {
            rankClass = 'bronze';
            rankIcon = '🥉';
        }
        
        item.innerHTML = `
            <div class="leaderboard-rank ${rankClass}">
                ${rankIcon || (index + 1)}
            </div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-details">
                    ${entry.class}. Sınıf • ${entry.topic} • ${entry.correctAnswers}/15 doğru • ${entry.date}
                </div>
            </div>
            <div class="leaderboard-score">${entry.score.toLocaleString('tr-TR')} ₺</div>
        `;
        list.appendChild(item);
    });
}

// Liderlik tablosu event listeners
viewLeaderboard.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    loadLeaderboard();
    displayLeaderboard(currentFilter);
    leaderboardModal.classList.add('active');
});

closeLeaderboard.addEventListener('click', () => {
    leaderboardModal.classList.remove('active');
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayLeaderboard(currentFilter);
    });
});

// endGame fonksiyonu yukarıda zaten tanımlandı, tekrar tanımlamaya gerek yok;

// Ana menü butonları
const viewLeaderboardMain = document.getElementById('viewLeaderboardMain');
const viewAchievementsMain = document.getElementById('viewAchievementsMain');
const viewStatsMain = document.getElementById('viewStatsMain');

viewLeaderboardMain.addEventListener('click', () => {
    loadLeaderboard();
    displayLeaderboard(currentFilter);
    leaderboardModal.classList.add('active');
});

viewAchievementsMain.addEventListener('click', () => {
    displayAchievements();
    achievementsModal.classList.add('active');
});

viewStatsMain.addEventListener('click', () => {
    displayStats();
    statsModal.classList.add('active');
});

// Sayfa yüklendiğinde verileri yükle
loadData();
loadLeaderboard();
updateControlButtons();