// Retour au top
function return_top() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SNK
const audio_snk_op = new Audio("./audio/snk_op.mp3");
const id_snk = document.getElementById("snk");

id_snk.addEventListener("mouseover", () => {
    audio_snk_op.currentTime = 67;
    audio_snk_op.volume = 0.3;
    audio_snk_op.play();
    control.textContent = 'Pause';
});

id_snk.addEventListener("mouseout", () => {
    audio_snk_op.pause();
    audio_snk_op.currentTime = 0;
    control.textContent = 'Play';
});

// SAO
const audio_sao_op = new Audio("./audio/sao_op.mp3");
const id_sao = document.getElementById("sao");

id_sao.addEventListener("mouseover", () => {
    audio_sao_op.currentTime = 45;
    audio_sao_op.volume = 0.3;
    audio_sao_op.play();
    control.textContent = 'Pause';
});

id_sao.addEventListener("mouseout", () => {
    audio_sao_op.pause();
    control.textContent = 'Play';
}); 