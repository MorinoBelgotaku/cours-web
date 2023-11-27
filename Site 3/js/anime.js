// SNK
const audio_snk_op = new Audio("./audio/snk_op.mp3");
const id_snk = document.getElementById("snk");

id_snk.addEventListener("mouseover", () => {
    audio_snk_op.currentTime = 67;
    audio_snk_op.volume = 0.1;
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
    audio_sao_op.volume = 0.1;
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
    audio_ditf_op.volume = 0.1;
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

// TEIS
const audio_teis_op = new Audio("./audio/teis_op.mp3");
const id_teis = document.getElementById("teis");

id_teis.addEventListener("mouseover", () => {
    audio_teis_op.currentTime = 57;
    audio_teis_op.volume = 0.1;
    audio_teis_op.play();
    control.textContent = 'Pause';
});

id_teis.addEventListener("mouseout", () => {
    audio_teis_op.pause();
    control.textContent = 'Play';
}); 

id_teis.addEventListener("click", () => {
    window.open('https://animationdigitalnetwork.fr/video/the-eminence-in-shadow', '_blank');
});

// REZERO
const audio_rezero_op = new Audio("./audio/rezero_op.mp3");
const id_rezero = document.getElementById("rezero");

id_rezero.addEventListener("mouseover", () => {
    audio_rezero_op.currentTime = 55;
    audio_rezero_op.volume = 0.1;
    audio_rezero_op.play();
    control.textContent = 'Pause';
});

id_rezero.addEventListener("mouseout", () => {
    audio_rezero_op.pause();
    control.textContent = 'Play';
}); 

id_rezero.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GRGG9798R/rezero--starting-life-in-another-world-', '_blank');
});

// Made in Abyss
const audio_mia_op = new Audio("./audio/mia_op.mp3");
const id_mia = document.getElementById("mia");

id_mia.addEventListener("mouseover", () => {
    audio_mia_op.currentTime = 47;
    audio_mia_op.volume = 0.1;
    audio_mia_op.play();
    control.textContent = 'Pause';
});

id_mia.addEventListener("mouseout", () => {
    audio_mia_op.pause();
    control.textContent = 'Play';
}); 

id_mia.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GQWH0M77N/made-in-abyss', '_blank');
});

// JJK
const audio_jjk_op = new Audio("./audio/jjk_op.mp3");
const id_jjk = document.getElementById("jjk");

id_jjk.addEventListener("mouseover", () => {
    audio_jjk_op.currentTime = 48;
    audio_jjk_op.volume = 0.1;
    audio_jjk_op.play();
    control.textContent = 'Pause';
});

id_jjk.addEventListener("mouseout", () => {
    audio_jjk_op.pause();
    control.textContent = 'Play';
}); 

id_jjk.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/GRDV0019R/jujutsu-kaisen', '_blank');
});

// Goblin Slayer
const audio_goblinslayer_op = new Audio("./audio/goblinslayer_op.mp3");
const id_goblinslayer = document.getElementById("goblinslayer");

id_goblinslayer.addEventListener("mouseover", () => {
    audio_goblinslayer_op.currentTime = 60;
    audio_goblinslayer_op.volume = 0.1;
    audio_goblinslayer_op.play();
    control.textContent = 'Pause';
});

id_goblinslayer.addEventListener("mouseout", () => {
    audio_goblinslayer_op.pause();
    control.textContent = 'Play';
}); 

id_goblinslayer.addEventListener("click", () => {
    window.open('https://animationdigitalnetwork.fr/video/goblin-slayer', '_blank');
});

// Horimiya
const audio_horimiya_op = new Audio("./audio/horimiya_op.mp3");
const id_horimiya = document.getElementById("horimiya");

id_horimiya.addEventListener("mouseover", () => {
    audio_horimiya_op.currentTime = 0;
    audio_horimiya_op.volume = 0.1;
    audio_horimiya_op.play();
    control.textContent = 'Pause';
});

id_horimiya.addEventListener("mouseout", () => {
    audio_horimiya_op.pause();
    control.textContent = 'Play';
}); 

id_horimiya.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/G9VHN9P43/horimiya', '_blank');
});

// No Game No Life
const audio_ngnl_op = new Audio("./audio/ngnl_op.mp3");
const id_ngnl = document.getElementById("ngnl");

id_ngnl.addEventListener("mouseover", () => {
    audio_ngnl_op.currentTime = 83;
    audio_ngnl_op.volume = 0.1;
    audio_ngnl_op.play();
    control.textContent = 'Pause';
});

id_ngnl.addEventListener("mouseout", () => {
    audio_ngnl_op.pause();
    control.textContent = 'Play';
}); 

id_ngnl.addEventListener("click", () => {
    window.open('https://animationdigitalnetwork.fr/video/no-game-no-life', '_blank');
});

// The Rising of The Shield Hero
const audio_trotsh_op = new Audio("./audio/trotsh_op.mp3");
const id_trotsh = document.getElementById("trotsh");

id_trotsh.addEventListener("mouseover", () => {
    audio_trotsh_op.currentTime = 20;
    audio_trotsh_op.volume = 0.1;
    audio_trotsh_op.play();
    control.textContent = 'Pause';
});

id_trotsh.addEventListener("mouseout", () => {
    audio_trotsh_op.pause();
    control.textContent = 'Play';
}); 

id_trotsh.addEventListener("click", () => {
    window.open('https://www.crunchyroll.com/fr/series/G6W4QKX0R/the-rising-of-the-shield-hero', '_blank');
});


