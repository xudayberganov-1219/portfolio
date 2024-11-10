// Matnlar ro'yxati
const texts = ["Men ushbu dasturlash tillarini bilaman:", "Python", "C++", "HTML", "CSS", "JS","Assalomu alaykum. Mening yaratgan saytimga xush kelibsiz!"];
let index = 0;
const animatedTextElement = document.getElementById("animated-text");
const finalTextElement = document.getElementById("final-text");

let currentText = "";
let currentLetterIndex = 0;

// Matnni yozib borish funksiyasi
const typeText = () => {
    if (currentLetterIndex < texts[index].length) {
        currentText += texts[index].charAt(currentLetterIndex);
        animatedTextElement.textContent = currentText;
        currentLetterIndex++;
        setTimeout(typeText, 100); // Harflar orasidagi kechikish
    } else {
        // Yozib bo'lgandan keyin o'chirishni boshlash
        setTimeout(deleteText, 1000); // 1 sekund kutish, so'ngra o'chirishni boshlash
    }
};

// Matnni o'chirish funksiyasi
const deleteText = () => {
    if (currentLetterIndex > 0) {
        currentText = currentText.slice(0, currentLetterIndex - 1);
        animatedTextElement.textContent = currentText;
        currentLetterIndex--;
        setTimeout(deleteText, 30); // Harf o'chirishdagi kechikish
    } else {
        // O'chirish tugagach, keyingi matnni yozish
        index = (index + 1) % texts.length; // Keyingi matnni tanlash
        setTimeout(typeText, 500); // Keyingi matnni yozishdan oldin biroz kutish
    }
};

// "Ushbu dasturlash tillarini bilaman" matnini ekranga chiqarish


// Dastlabki matnni yozishni boshlash
typeText();

// Yozish va o'chirish jarayoni tugagach, final matnini ko'rsatish
// 10 soniyadan keyin loading indikatorini olib tashlash va kontentni ko'rsatish
window.addEventListener('load', function() {
    setTimeout(function() {
      // Loading konteynerini yashirish
      document.querySelector('.loading-container').style.display = 'none';
      
      // Asosiy kontentni ko'rsatish
      document.querySelector('.content').style.display = 'block';
    }, 7500); // 10 soniya (10000 millisekund)
    document.body.style.overflow = 'auto';  // Saytni qayta ko'rish uchun scroll qilishga ruxsat berish
  }, 10000);
  
  