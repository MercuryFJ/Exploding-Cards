// --- IMPORTS ---
import { Card } from "./cards.js";
import * as c from "./constants.js";

// --- DOM ITEMS ---
//Container of the card. This will be contains the type and the value of the card.
const cardElement = document.createElement("div");

//This button allows you to draw a card.
const drawButton = document.createElement("button");

//This represents the type of the card in the card container.
const cardType = document.createElement("h1");

//This represents the value of the card in the card container (only with points card type).
const cardValue = document.createElement("h1");

//This button allows to restart the game.
const restartButton = document.createElement("button");

//It notifies you that the game has ended.
const endGameText = document.createElement("h1");

//This will be contains the items of the card header
let cardHeader = document.createElement("div");

//Contains the description and the type of the card. This will include in the card header and footer.
let typeDescContainer = document.createElement("div");

//The icon of the card. You can find this in the card header or card footer.
let iconElement = document.createElement("img");

//This item is the center symbol of the card.
let imageElement = document.createElement("img");

//This contains the description of the card
let cardDescElement = document.createElement("p");

//This container will contains the clone of the card header
let cardFooter;

// --- CODE ---
let deck = [];
loadGame();
showCard();

// --- EVENTS ---
drawButton.addEventListener("click", () => {
    deck.pop();
    if (deck.length === 0) {
        gameOver();
    } else {
        cardElement.removeChild(cardFooter);
        showCard();
    }
    console.log(deck);
});

restartButton.addEventListener("click", () => {
    loadGame();
    endGameText.classList.add("hide");
    restartButton.classList.add("hide");
    drawButton.classList.remove("hide");
    cardElement.style.display = "flex";
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
    cardType.innerText = lastCard.type;
    cardDescElement.innerText = lastCard.desc;
    iconElement.setAttribute("src", lastCard.icon);
    imageElement.setAttribute("src", lastCard.icon);
    cardElement.classList = "";
    cardElement.classList.add(lastCard.color);
    if (lastCard.value != null) {
        cardValue.innerText = lastCard.value;
    } else {
        cardValue.innerText = "";
    }
    cardFooter = cardHeader.cloneNode(true);
    cardFooter.setAttribute("id", "cardFooter");
    cardElement.append(cardHeader, imageElement, cardFooter);
}

//Shows a a message when the deck runs out of cards.
function gameOver() {
    drawButton.classList.add("hide");
    cardElement.style.display = "none";
    restartButton.classList.remove("hide");
    endGameText.classList.remove("hide");
    document.body.append(restartButton, endGameText);
}

//Fill and shuffle the deck of cards. Assigns values ​​to DOM elements.
function loadGame() {
    fillDeck();
    cardsShuffle();
    console.log(deck);

    drawButton.textContent = "Draw card";
    cardElement.setAttribute("id", "card");
    cardHeader.setAttribute("id", "cardHeader");
    iconElement.classList.add("icon"); 
    imageElement.setAttribute("id", "symbol");
    typeDescContainer.setAttribute("id", "cardDesc");

    typeDescContainer.append(cardType, cardDescElement);
    cardHeader.append(iconElement, typeDescContainer, cardValue);
    document.body.append(drawButton, cardElement);

    restartButton.textContent = "Restart";
    restartButton.classList.add("hide");
    
    endGameText.textContent = "Game Over";
    endGameText.classList.add("hide");
}
