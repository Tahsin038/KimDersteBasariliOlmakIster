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

// 📚 TÜM SORULAR
const questionBank = {
  "5": [
    // Matematik
    { question: "5 + 3 = ?", answers: ["6", "7", "8", "9"], correct: 2, subject: "Matematik" },
    { question: "12 – 7 = ?", answers: ["4", "5", "6", "7"], correct: 1, subject: "Matematik" },
    { question: "Bir saatte kaç dakika vardır?", answers: ["30", "45", "60", "90"], correct: 2, subject: "Matematik" },
    { question: "10’un yarısı kaçtır?", answers: ["2", "4", "5", "6"], correct: 2, subject: "Matematik" },
    { question: "9 × 3 = ?", answers: ["27", "18", "36", "24"], correct: 0, subject: "Matematik" },

    // Fen
    { question: "Bitkiler ne ile besin üretir?", answers: ["Fotosentez", "Solunum", "Sindirim", "Emilim"], correct: 0, subject: "Fen" },
    { question: "Güneş’in enerjisi hangi tür enerjidir?", answers: ["Isı", "Işık", "Güneş", "Rüzgar"], correct: 1, subject: "Fen" },
    { question: "İnsanlar hangi gazı solur?", answers: ["Karbondioksit", "Oksijen", "Azot", "Hidrojen"], correct: 1, subject: "Fen" },
    { question: "Yağmur hangi hâl değişimiyle oluşur?", answers: ["Buharlaşma", "Yoğuşma", "Donma", "Erime"], correct: 1, subject: "Fen" },
    { question: "Sesin yayılması için ne gerekir?", answers: ["Boşluk", "Madde", "Su", "Güneş"], correct: 1, subject: "Fen" },

    // Türkçe
    { question: "Cümlenin sonuna ne konur?", answers: [".", ",", ";", ":"], correct: 0, subject: "Türkçe" },
    { question: "“Güzel” kelimesi hangi tür sözcüktür?", answers: ["İsim", "Sıfat", "Zarf", "Fiil"], correct: 1, subject: "Türkçe" },
    { question: "“Ben okula gittim.” cümlesindeki fiil hangisidir?", answers: ["Ben", "Okula", "Gittim", "Cümlesi"], correct: 2, subject: "Türkçe" },
    { question: "Noktalama işaretlerinden biri değildir?", answers: ["Virgül", "Ünlem", "Kök", "Soru işareti"], correct: 2, subject: "Türkçe" },
    { question: "Eş anlamlı kelime hangisidir?", answers: ["Küçük – Ufak", "Büyük – Kısa", "Uzun – Geniş", "Yeni – Eski"], correct: 0, subject: "Türkçe" },

    // Sosyal
    { question: "Türkiye’nin başkenti neresidir?", answers: ["İstanbul", "Ankara", "İzmir", "Bursa"], correct: 1, subject: "Sosyal" },
    { question: "Cumhuriyet ne zaman ilan edilmiştir?", answers: ["1920", "1921", "1923", "1938"], correct: 2, subject: "Sosyal" },
    { question: "Atatürk’ün doğum yeri neresidir?", answers: ["Selanik", "İstanbul", "Ankara", "Samsun"], correct: 0, subject: "Sosyal" },
    { question: "TBMM’nin açılış yılı nedir?", answers: ["1918", "1919", "1920", "1921"], correct: 2, subject: "Sosyal" },
    { question: "Milli bayramlarımızdan biri nedir?", answers: ["Anneler Günü", "Cumhuriyet Bayramı", "Yılbaşı", "23 Nisan"], correct: 1, subject: "Sosyal" }
  ],

  "6": [
    // Matematik
    { question: "24 ÷ 6 = ?", answers: ["2", "3", "4", "5"], correct: 2, subject: "Matematik" },
    { question: "Bir üçgende kaç kenar vardır?", answers: ["2", "3", "4", "5"], correct: 1, subject: "Matematik" },
    { question: "Dik açı kaç derecedir?", answers: ["45", "60", "90", "180"], correct: 2, subject: "Matematik" },
    { question: "1 tam = ? kesir", answers: ["1/2", "2/2", "3/2", "4/2"], correct: 1, subject: "Matematik" },
    { question: "Alan birimi hangisidir?", answers: ["m", "m²", "cm", "kg"], correct: 1, subject: "Matematik" },

    // Fen
    { question: "Yerçekimi kuvvetini kim bulmuştur?", answers: ["Einstein", "Newton", "Tesla", "Edison"], correct: 1, subject: "Fen" },
    { question: "Dünya hangi yöne döner?", answers: ["Doğudan batıya", "Batıdan doğuya", "Kuzeyden güneye", "Güneyden kuzeye"], correct: 1, subject: "Fen" },
    { question: "Maddenin halleri kaç tanedir?", answers: ["2", "3", "4", "5"], correct: 1, subject: "Fen" },
    { question: "Bitkiler hangi gazı kullanır?", answers: ["Oksijen", "Karbondioksit", "Azot", "Hidrojen"], correct: 1, subject: "Fen" },
    { question: "Elektrik devresinde enerji kaynağı nedir?", answers: ["Kablo", "Ampul", "Pil", "Anahtar"], correct: 2, subject: "Fen" },

    // Türkçe
    { question: "Fiiller neyi bildirir?", answers: ["İsim", "Durum", "Eylem", "Zaman"], correct: 2, subject: "Türkçe" },
    { question: "Cümlenin yüklemi neyi gösterir?", answers: ["Konu", "Özne", "Yapılan işi", "Yer"], correct: 2, subject: "Türkçe" },
    { question: "“Sessiz” kelimesinin zıt anlamlısı nedir?", answers: ["Gürültülü", "Hızlı", "Durgun", "Yavaş"], correct: 0, subject: "Türkçe" },
    { question: "Fiiller hangi ekle yapılır?", answers: ["-ma", "-mak", "-lık", "-lı"], correct: 1, subject: "Türkçe" },
    { question: "“Koşmak” kelimesi nedir?", answers: ["İsim", "Sıfat", "Fiil", "Zarf"], correct: 2, subject: "Türkçe" },

    // Sosyal
    { question: "İlk çağda insanlar nerelerde yaşamıştır?", answers: ["Mağara", "Ev", "Apartman", "Köy"], correct: 0, subject: "Sosyal" },
    { question: "Türkiye'nin kuzeyinde hangi deniz vardır?", answers: ["Akdeniz", "Karadeniz", "Ege", "Marmara"], correct: 1, subject: "Sosyal" },
    { question: "Anayasa nedir?", answers: ["Oyun", "Yasa", "Kurallar bütünü", "Harita"], correct: 2, subject: "Sosyal" },
    { question: "Bir ülkenin yönetim biçimi neyle belirlenir?", answers: ["Cumhuriyet", "Meclis", "Anayasa", "Başbakan"], correct: 2, subject: "Sosyal" },
    { question: "Atatürk'ün soyadı ne zaman verilmiştir?", answers: ["1923", "1934", "1938", "1920"], correct: 1, subject: "Sosyal" }
  ],

  "7": [
    // Matematik
    { question: "Bir dikdörtgenin alanı nasıl bulunur?", answers: ["Kenar+kenar", "Kenar×kenar", "Kenar÷kenar", "Kenar−kenar"], correct: 1, subject: "Matematik" },
    { question: "3² sonucu kaçtır?", answers: ["3", "6", "9", "12"], correct: 2, subject: "Matematik" },
    { question: "Bir tam sayının karesi daima...", answers: ["Pozitif", "Negatif", "Sıfır", "Değişken"], correct: 0, subject: "Matematik" },
    { question: "Pi sayısı yaklaşık kaçtır?", answers: ["2.14", "3.14", "4.14", "5.14"], correct: 1, subject: "Matematik" },
    { question: "Oran nasıl yazılır?", answers: ["a+b", "a/b", "a×b", "a−b"], correct: 1, subject: "Matematik" },

    // Fen
    { question: "Hücreyi kim keşfetmiştir?", answers: ["Hooke", "Newton", "Einstein", "Darwin"], correct: 0, subject: "Fen" },
    { question: "Bitkinin kökü ne işe yarar?", answers: ["Solunum", "Besin taşıma", "Su emme", "Fotosentez"], correct: 2, subject: "Fen" },
    { question: "Kanın pıhtılaşmasını sağlayan hücre nedir?", answers: ["Akyuvar", "Trombosit", "Alyuvar", "Plazma"], correct: 1, subject: "Fen" },
    { question: "Sesin yüksekliği neyle ilgilidir?", answers: ["Frekans", "Genlik", "Titreşim", "Dalga"], correct: 0, subject: "Fen" },
    { question: "Yıldızların kendi ışığı var mıdır?", answers: ["Yok", "Evet", "Bazen", "Sadece Güneş’in"], correct: 1, subject: "Fen" },

    // Türkçe
    { question: "Fiilimsi nedir?", answers: ["İsim", "Fiilden türeyen kelime", "Cümle", "Zarf"], correct: 1, subject: "Türkçe" },
    { question: "Eylemsi eki olmayan hangisidir?", answers: ["-mak", "-ınca", "-lık", "-madan"], correct: 2, subject: "Türkçe" },
    { question: "“Anlamca kaynaşmış birleşik fiil” hangisidir?", answers: ["Yola çıkmak", "El yıkamak", "Kırmızı elma", "Sınıfa girmek"], correct: 0, subject: "Türkçe" },
    { question: "“Gözden geçirmek” deyimi ne anlama gelir?", answers: ["Bakmak", "Kontrol etmek", "Silmek", "Yazmak"], correct: 1, subject: "Türkçe" },
    { question: "Cümledeki eylem nedir?", answers: ["Yüklem", "Özne", "Tümleç", "Nesne"], correct: 0, subject: "Türkçe" },

    // Sosyal
    { question: "Türkiye kaç coğrafi bölgeye ayrılır?", answers: ["5", "6", "7", "8"], correct: 2, subject: "Sosyal" },
    { question: "TBMM’nin açılış tarihi nedir?", answers: ["1918", "1919", "1920", "1923"], correct: 2, subject: "Sosyal" },
    { question: "Lozan Antlaşması hangi yılda imzalanmıştır?", answers: ["1920", "1923", "1938", "1930"], correct: 1, subject: "Sosyal" },
    { question: "İlk Türk devletlerinden biri hangisidir?", answers: ["Selçuklu", "Osmanlı", "Göktürk", "Anadolu Beylikleri"], correct: 2, subject: "Sosyal" },
    { question: "Türkiye’nin en büyük gölü hangisidir?", answers: ["Tuz Gölü", "Van Gölü", "Beyşehir", "Eğirdir"], correct: 1, subject: "Sosyal" }
  ],

  "8": [
    // Matematik
    { question: "Karekök 81 kaçtır?", answers: ["8", "9", "10", "11"], correct: 1, subject: "Matematik" },
    { question: "Bir üçgenin iç açılar toplamı kaçtır?", answers: ["90", "120", "180", "360"], correct: 2, subject: "Matematik" },
    { question: "x² = 16 ise x kaç olabilir?", answers: ["4", "−4", "±4", "8"], correct: 2, subject: "Matematik" },
    { question: "π sayısının yaklaşık değeri?", answers: ["3", "3.14", "3.5", "4"], correct: 1, subject: "Matematik" },
    { question: "Yüzde 50 hangi kesre eşittir?", answers: ["1/2", "1/3", "2/4", "5/10"], correct: 0, subject: "Matematik" },

    // Fen
    { question: "DNA’nın yapısını kim bulmuştur?", answers: ["Newton", "Watson-Crick", "Einstein", "Darwin"], correct: 1, subject: "Fen" },
    { question: "Işık hangi ortamda yayılmaz?", answers: ["Boşluk", "Su", "Cam", "Katı"], correct: 3, subject: "Fen" },
    { question: "Atomun merkezinde ne vardır?", answers: ["Proton ve nötron", "Elektron", "Nötron", "Yörünge"], correct: 0, subject: "Fen" },
    { question: "Güneş hangi tür yıldızdır?", answers: ["Kırmızı dev", "Beyaz cüce", "Ana kol yıldızı", "Nötron yıldızı"], correct: 2, subject: "Fen" },
    { question: "Sera etkisi hangi gazla ilgilidir?", answers: ["Oksijen", "Karbondioksit", "Azot", "Hidrojen"], correct: 1, subject: "Fen" },

    // Türkçe
    { question: "Özne cümlede neyi belirtir?", answers: ["Yapanı", "Yapılanı", "Yeri", "Zamanı"], correct: 0, subject: "Türkçe" },
    { question: "Fiilimsi olmayan hangisidir?", answers: ["Gülmek", "Gülen", "Gülüş", "Gülerek"], correct: 0, subject: "Türkçe" },
    { question: "Anlamca zıt kelime hangisidir?", answers: ["Uzun–Kısa", "Büyük–Kocaman", "Küçük–Minik", "Genç–Delikanlı"], correct: 0, subject: "Türkçe" },
    { question: "Deyim nedir?", answers: ["Atasözü", "Kalıplaşmış ifade", "Fiil", "Bağlaç"], correct: 1, subject: "Türkçe" },
    { question: "“Sessizce” kelimesi hangi tür sözcüktür?", answers: ["Zarf", "İsim", "Sıfat", "Fiil"], correct: 0, subject: "Türkçe" },

    // Sosyal
    { question: "Türkiye’nin ilk anayasası hangisidir?", answers: ["1921", "1924", "1961", "1982"], correct: 0, subject: "Sosyal" },
    { question: "Atatürk’ün doğum yeri nedir?", answers: ["Selanik", "İstanbul", "Ankara", "Samsun"], correct: 0, subject: "Sosyal" },
    { question: "Cumhuriyet ne zaman ilan edilmiştir?", answers: ["1920", "1921", "1923", "1938"], correct: 2, subject: "Sosyal" },
    { question: "TBMM’nin açılış yılı nedir?", answers: ["1918", "1919", "1920", "1921"], correct: 2, subject: "Sosyal" },
    { question: "Milli bayramlarımızdan biri nedir?", answers: ["Anneler Günü", "Cumhuriyet Bayramı", "Yılbaşı", "23 Nisan"], correct: 1, subject: "Sosyal" }
  ]
};
