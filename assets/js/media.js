window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav'); // <-- target <nav>

burger.addEventListener('click', () => {
    nav.classList.toggle('active');  // toggle nav, bukan ul
    burger.classList.toggle('open'); // animasi burger
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");
    const cards = document.querySelectorAll(".media-card");
    const backToTop = document.getElementById("backToTop");

    // STAGGER MEDIA CARD
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });

        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

const images = document.querySelectorAll(".media-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const nextBtn = document.querySelector(".lightbox .next");
const prevBtn = document.querySelector(".lightbox .prev");

let currentIndex = 0;
let isOpen = false;

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
        isOpen = true;
    });
});

/* SHOW IMAGE */
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

/* NEXT (LOOP) */
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}

/* PREV (LOOP) */
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

/* BUTTON EVENTS */
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

/* CLOSE (❌ BUTTON) */
closeBtn.addEventListener("click", closeLightbox);

function closeLightbox() {
    lightbox.style.display = "none";
    isOpen = false;
}

/* ⌨️ KEYBOARD CONTROL */
document.addEventListener("keydown", (e) => {
    if (!isOpen) return;

    switch (e.key) {
        case "ArrowRight":
            nextImage();
            break;

        case "ArrowLeft":
            prevImage();
            break;

        case "Escape":
            closeLightbox(); // ✅ ESC CLOSE
            break;
    }
});