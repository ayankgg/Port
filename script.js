particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4db8ff" },
        shape: { type: "circle" },
        opacity: { value: 9.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 200, color: "#4db8ff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 4}
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 8 } },
            push: { particles_nb: 8 }
        }
    },
    retina_detect: true
});

// Scroll Fade-in Effect
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});