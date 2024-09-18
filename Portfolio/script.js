//Type writer
const words = [
  "er 22 år.",
  "er bosat i Aarhus.",
  "studerer til Multimediedesigner.",
  "er på udkig efter en praktikplads.",
  "vil være frontend-designer.",
  "vil være webdeveloper.",
  "er lærenem.",
  "er passioneret.",
  "er type 1-diabetiker.",
  "er interesseret i computerspil.",
  "er en stor Liverpool fan.",
];
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

// Dark mode og light mode
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");

  // Tjek om dark mode er aktiv
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "img/lightmode.png";
    document.getElementById("html-icon").src = "img/html-hvid.png";
    document.getElementById("css-icon").src = "img/css-hvid.png";
    document.getElementById("js-icon").src = "img/js-hvid.png";
    document.getElementById("react-icon").src = "img/react-hvid.png";
    document.getElementById("kontakt-icon").src = "img/kontakt-icon-hvid.png";
    document.getElementById("github").src = "img/github-hvid.png";
    document.getElementById("email").src = "img/email-hvid.png";
    document.getElementById("linkedin").src = "img/linkedin-hvid.png";
  } else {
    icon.src = "img/darkmode.png";
    document.getElementById("html-icon").src = "img/black-html5.png";
    document.getElementById("css-icon").src = "img/css-black.png";
    document.getElementById("js-icon").src = "img/icons8-javascript-150.png";
    document.getElementById("react-icon").src =
      "img/icons8-react-native-150.png";
    document.getElementById("kontakt-icon").src = "img/kontakt-icon-sort.png";
    document.getElementById("github").src = "img/github-sort.png";
    document.getElementById("email").src = "img/email-sort.png";
    document.getElementById("linkedin").src = "img/linkedin-sort.png";
  }
};

// Fade in til skills section
window.addEventListener("scroll", function () {
  var skillsSection = document.getElementById("skills");
  var skillsPosition = skillsSection.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (skillsPosition < windowHeight / 1.5) {
    skillsSection.classList.add("fade-in");
  }
});

// Transition til Om mig sektionen

// Find elementet
const aboutSection = document.getElementById("transition-to-about");

// Tjek om elementet er synligt i viewporten
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <=
    (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
  );
}

// Lyt efter scroll events
window.addEventListener("scroll", function () {
  if (isElementInViewport(aboutSection)) {
    aboutSection.classList.add("show");
  }
});

// Burger Menu

document.getElementById("burgerIcon").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});

// SwiperJS script

new Swiper(".card-wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1014: {
      slidesPerView: 3,
    },
  },
});

// Fade in af projekter sectionen

document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.querySelector(".pro-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      rootMargin: "0px 0px -400px 0px", // Delay animationen indtil 200px inde i viewport
    }
  );

  observer.observe(projectSection);
});

// Fade in af kontakt sectionen

document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector(".kontakt-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      rootMargin: "0px 0px -110px 0px", // Kontaktsektionen animeres først, når den er 150px inde i viewporten
    }
  );

  observer.observe(contactSection);
});

// Funktion til at scrolle til toppen
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth scroll til alle elementer

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 90; // Juster denne værdi afhængigt af din navigation
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Progress bar

window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
