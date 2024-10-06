// --- IMPORTS ---
import { Card } from "./cards.js";
import * as c from "./constants.js";

// --- CODE ---
let deck = [];
loadDeck();

c.drawButton.textContent = "Draw card";
c.cardElement.setAttribute("id", "card");
c.restartButton.classList.add("hide");
c.restartButton.textContent = "Restart";
c.endGameText.classList.add("hide");
c.endGameText.textContent = "Game Over";

showCard();
document.body.append(c.drawButton, c.cardElement);

// --- EVENTS ---
c.drawButton.addEventListener("click", () => {
    deck.pop();
    if (deck.length === 0) {
        gameOver();
    } else {
        showCard();
    }
    console.log(deck);
});

c.restartButton.addEventListener("click", () => {
    loadDeck();
    c.endGameText.classList.add("hide");
    c.restartButton.classList.add("hide");
    c.drawButton.classList.remove("hide");
    c.cardElement.style.display = "flex";
});

// --- FUNCTIONS ---
//Shuffle the deck of cards.
function cardsShuffle() {

    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 
    for (let i = deck.length - 1; i > 0; i--) {

        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] with the element 
        // at random index 
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

//Fill the deck by card types
function fillDeck() {
    //Fill with cards at type bomb
    for (let i = 0; i < c.CARD_VALUES.BOMB; i++) {
        let card = new Card(c.CARD_TYPES.BOMB);
        deck.push(card);
    }

    //Fill with cards at type defuse
    for (let i = 0; i < c.CARD_VALUES.DEFUSE; i++) {
        let card = new Card(c.CARD_TYPES.DEFUSE);
        deck.push(card);
    }

    //Fill with cards at type skip turn
    for (let i = 0; i < c.CARD_VALUES.SKIP_TURN; i++) {
        let card = new Card(c.CARD_TYPES.SKIP_TURN);
        deck.push(card);
    }

    //Fill with cards at type nope
    for (let i = 0; i < c.CARD_VALUES.NOPE; i++) {
        let card = new Card(c.CARD_TYPES.NOPE);
        deck.push(card);
    }

    //Fill with cards at type points
    for (let i = 0; i < c.CARD_VALUES.POINTS; i++) {
        let randomPoints = (Math.floor(Math.random() * c.MAX_NUM_POINTS) + c.MIN_NUM_POINTS);
        let card = new Card(c.CARD_TYPES.POINTS, randomPoints);
        deck.push(card);
    }
}

//Shows the card if the deck is not empty.
function showCard() {
    let lastCard = deck[deck.length - 1];
    c.cardType.innerText = lastCard.type;
    if (lastCard.value != null) {
        c.cardValue.innerText = lastCard.value;
    } else {
        c.cardValue.innerText = "";
    }
    c.cardElement.append(c.cardType, c.cardValue);
}

//Shows a a message when the deck runs out of cards.
function gameOver(){
    c.drawButton.classList.add("hide");
    c.cardElement.style.display = "none";
    c.restartButton.classList.remove("hide");
    c.endGameText.classList.remove("hide");
    document.body.append(c.restartButton, c.endGameText);
}

//Fill and shuffle the deck of cards.
function loadDeck() {
    fillDeck();
    cardsShuffle();
    console.log(deck);
}