
let hscore = 0;
let gscore = 0;
let score1El = document.getElementById("score-1");
let score2El = document.getElementById("score-2");

function reset_score() {
    hscore = 0;
    gscore = 0;
    score1El.textContent = hscore;
    score2El.textContent = gscore;
}
function hincr1() {
    hscore += 1;
    score1El.textContent = hscore;
}
function hincr2() {
    hscore += 2;
    score1El.textContent = hscore;
}
function hincr3() {
    hscore += 3;
    score1El.textContent = hscore;
}
function gincr1() {
    gscore += 1;
    score2El.textContent = gscore;
}
function gincr2() {
    gscore += 2;
    score2El.textContent = gscore;
}
function gincr3() {
    gscore += 3;
    score2El.textContent = gscore;
}

