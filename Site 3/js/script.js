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

id_snk.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GR751KNZY/attack-on-titan', '_blank');
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

id_sao.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GR49G9VP6/sword-art-online', '_blank');
});

// DITF
const audio_ditf_op = new Audio("./audio/ditf_op.mp3");
const id_ditf = document.getElementById("ditf");

id_ditf.addEventListener("mouseover", () => {
    audio_ditf_op.currentTime = 56;
    audio_ditf_op.volume = 0.3;
    audio_ditf_op.play();
    control.textContent = 'Pause';
});

id_ditf.addEventListener("mouseout", () => {
    audio_ditf_op.pause();
    control.textContent = 'Play';
}); 

id_ditf.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GY8VEQ95Y/darling-in-the-franxx', '_blank');
});