const audio_do = new Audio("./audio/piano/do.wav");
const audio_re = new Audio("./audio/piano/re.wav");
const audio_mi = new Audio("./audio/piano/mi.wav");
const audio_fa = new Audio("./audio/piano/fa.wav");
const audio_sol = new Audio("./audio/piano/sol.wav");
const audio_la = new Audio("./audio/piano/la.wav");
const audio_si = new Audio("./audio/piano/si.wav");
const piano_do = document.getElementById("do");
const piano_re = document.getElementById("re");
const piano_mi = document.getElementById("mi");
const piano_fa = document.getElementById("fa");
const piano_sol = document.getElementById("sol");
const piano_la = document.getElementById("la");
const piano_si = document.getElementById("si");

piano_do.addEventListener("click", () => {
    audio_do.cloneNode(true).play();
});
piano_re.addEventListener("click", () => {
    audio_re.cloneNode(true).play();
});
piano_mi.addEventListener("click", () => {
    audio_mi.cloneNode(true).play();
});
piano_fa.addEventListener("click", () => {
    audio_fa.cloneNode(true).play();
});
piano_sol.addEventListener("click", () => {
    audio_sol.cloneNode(true).play();
});
piano_la.addEventListener("click", () => {
    audio_la.cloneNode(true).play();
});
piano_si.addEventListener("click", () => {
    audio_si.cloneNode(true).play();
});

document.addEventListener('keyup', () => {
    audio_do.cloneNode(true).play();
});