// COUNTER PROGRAM

const decreasebutton = document.getElementById("decrease-button");
const resetbutton = document.getElementById("reset-button");
const increasebutton = document.getElementById("increase-button");

const countlabel = document.getElementById("count-label");

let count = 0;

increasebutton.onclick = function () {
    count++;
    countlabel.textContent = count;
}

// disable if count less than 0


decreasebutton.onclick = function () {
    count--;
    countlabel.textContent = count;
}
resetbutton.onclick = function () {
    count=0;
    countlabel.textContent = count;
}