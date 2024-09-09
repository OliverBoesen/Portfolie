const words = ["er 22 år.",
    "er bosat i Aarhus.",
    "studerer til Multimediedesigner.",
    "er på udgik efter en praktik plads.",
    "vil være frontend designer.",
     "vil være webdeveloper.",
      "er lærenem.",
       "er passioneret.",
        "er interesseret i computerspil.",
    "er en stor Liverpool fan."];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 70; // Hastighed for skrivning
    const deletingSpeed = 50; // Hastighed for sletning
    const delayBetweenWords = 1000; // Ventetid mellem ord

    const dynamicText = document.getElementById("dynamic-text");

    function type() {
        if (charIndex < words[wordIndex].length) {
            dynamicText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, deletingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, typingSpeed);
    });


    var icon = document.getElementById("icon");

    icon.onclick = function() {
        document.body.classList.toggle("dark-mode");
        
        // Tjek om dark mode er aktiv
        if (document.body.classList.contains("dark-mode")) {
            icon.src = "img/lightmode.png";
            document.getElementById("html-icon").src = "img/html-hvid.png";
            document.getElementById("css-icon").src = "img/css-hvid.png";
            document.getElementById("js-icon").src = "img/js-hvid.png";
            document.getElementById("react-icon").src = "img/react-hvid.png";
        } else {
            icon.src = "img/darkmode.png";
            document.getElementById("html-icon").src = "img/black-html5.png";
            document.getElementById("css-icon").src = "img/css-black.png";
            document.getElementById("js-icon").src = "img/icons8-javascript-150.png";
            document.getElementById("react-icon").src = "img/icons8-react-native-150.png";
        }
    }
    
    
