
// Pause all animations initially
window.onload = () => {
    document.querySelectorAll("*").forEach(el => {
        el.style.animationPlayState = "paused";
    });
};

let started = false;

// When user clicks anywhere
document.addEventListener("click", () => {
    if (started) return;
    started = true;

    // Resume all animations
    document.querySelectorAll("*").forEach(el => {
        el.style.animationPlayState = "running";
    });

    // Play music if available
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.play().catch(()=>{});
    }

    // Start falling petals
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
