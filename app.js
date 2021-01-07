let card = document.querySelector('.card');
let shuffleBtn = document.querySelector("#shuffle");
let upSuit = document.querySelector('.up-suit');
let downSuit = document.querySelector('.down-suit');
let cardNumber = document.querySelector('.number');

let suits = ['&spades;', '&clubs;', '&hearts;', '&diams;']; 
let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'K', 'Q', 'J'];

shuffleBtn.addEventListener("click", () => {
  generateCard();
  playSound();
});

function generateCard() {

    let randomSuit = Math.floor(Math.random() * suits.length);
    let randomNum = Math.floor(Math.random() * nums.length);

    upSuit.innerHTML = suits[randomSuit];
    downSuit.innerHTML = suits[randomSuit];
    cardNumber.innerHTML = nums[randomNum];

    card.classList.add("animate__animated", "animate__bounceIn", "animate__fast");
    shuffleBtn.classList.add("animate__animated", "animate__jello", "animate__fast");

    card.addEventListener('animationend', () => {
        card.classList.remove("animate__animated", "animate__bounceIn", "animate__fast");
    });

    shuffleBtn.addEventListener('animationend', () => {
        shuffleBtn.classList.remove("animate__animated", "animate__jello", "animate__fast");
    });

}

window.onload = generateCard();

let cardSound = new Audio('./cardSound.wav');

function playSound() {
    cardSound.play();
}