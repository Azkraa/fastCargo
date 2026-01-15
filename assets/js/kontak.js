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

    const reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    const backToTop = document.getElementById("backToTop");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 120) {
                el.classList.add("show");
            }
        });

        // Back to top
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});