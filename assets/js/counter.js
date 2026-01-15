document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    const startCounter = (counter) => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = Math.ceil(target / 100);

        const update = () => {
            if (current < target) {
                current += increment;
                counter.textContent = current;
                setTimeout(update, 20);
            } else {
                counter.textContent = target + "+";
            }
        };

        update();
    };

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    obs.unobserve(entry.target); // run only once
                }
            });
        },
        { threshold: 0.5 } // starts when 50% visible
    );

    counters.forEach(counter => observer.observe(counter));
});
