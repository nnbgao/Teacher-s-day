let started = false;

// Start animations immediately
document.addEventListener("DOMContentLoaded", () => {
    // Resume animations
    document.querySelectorAll("*").forEach(el => {
        el.style.animationPlayState = "running";
    });

    const audio = document.getElementById("myAudio");
    if (audio) audio.play().catch(()=>{});

    startPetals();
});

// Petal effect
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('falling-petal');

    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random()*3 + 2) + 's';

    const size = Math.random()*10 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
}

function startPetals() {
    setInterval(createPetal, 300);
}