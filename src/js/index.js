// --- IMPORTS ---
import { Card } from "./cards.js";
import * as c from "./constants.js";

// --- DOM ITEMS ---
//Container that will contains the game title.
const titleElement = document.createElement("h1");

//Container that will have the draw card button and the card
const buttonCardContainer = document.createElement("div");

//It will contain the title of the end of the game and the restart button
const endGameContainer = document.createElement("div");

//Container of the card. This will be contains the type and the value of the card.
const cardElement = document.createElement("div");
cardElement.setAttribute("id", "card");

//This button allows you to draw a card.
const drawButton = document.createElement("button");
drawButton.classList.add("button-27");

//This represents the type of the card in the card container.
const cardType = document.createElement("h2");

//This represents the value of the card in the card container (only with points card type).
const cardValue = document.createElement("h2");

//This button allows to restart the game.
const restartButton = document.createElement("button");
restartButton.classList.add("button-28");

//It notifies you that the game has ended.
const endGameText = document.createElement("h2");
endGameText.setAttribute("id", "end-game-text");

//This will be contains the items of the card header
let cardHeader = document.createElement("div");
cardHeader.setAttribute("id", "cardHeader");

//Contains the description and the type of the card. This will include in the card header and footer.
let typeDescContainer = document.createElement("div");
typeDescContainer.setAttribute("id", "cardDesc");

//The icon of the card. You can find this in the card header or card footer.
let iconElement = document.createElement("img");
iconElement.classList.add("icon");

//This item is the center symbol of the card.
let symbolElement = document.createElement("img");
symbolElement.setAttribute("id", "symbol");

//This contains the description of the card
let cardDescElement = document.createElement("p");

//This container will contains the clone of the card header
let cardFooter;

// --- CODE ---

titleElement.innerText = "EXPLODING CARDS";
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
    buttonCardContainer.classList.replace("hide", "game-container");
    endGameContainer.classList.replace("game-container", "hide");
});

// --- FUNCTIONS ---
//Fill and shuffle the deck of cards. Assigns values ​​to DOM elements.
function loadGame() {
    fillDeck();
    cardsShuffle();
    console.log(deck);

    buttonCardContainer.classList.add("game-container");
    

    drawButton.textContent = "Draw card";

    typeDescContainer.append(cardType, cardDescElement);
    cardHeader.append(iconElement, typeDescContainer, cardValue);
    buttonCardContainer.append(drawButton, cardElement);
    document.body.append(titleElement, buttonCardContainer);

    restartButton.textContent = "Restart";
    endGameText.textContent = "GAME OVER";
    endGameContainer.classList.add("hide");
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

//Shows the card if the deck is not empty.
function showCard() {
    let lastCard = deck[deck.length - 1];
    cardType.innerText = lastCard.type;
    cardDescElement.innerText = lastCard.desc;
    iconElement.setAttribute("src", lastCard.icon);
    symbolElement.setAttribute("src", lastCard.icon);
    cardElement.classList = "";
    cardElement.classList.add(lastCard.color);
    if (lastCard.value != null) {
        cardValue.innerText = lastCard.value;
    } else {
        cardValue.innerText = "";
    }
    cardFooter = cardHeader.cloneNode(true);
    cardFooter.setAttribute("id", "cardFooter");
    cardElement.append(cardHeader, symbolElement, cardFooter);
}

//Shows a a message when the deck runs out of cards.
function gameOver() {
    buttonCardContainer.classList.replace("game-container", "hide");
    endGameContainer.classList.replace("hide", "game-container");

    endGameContainer.append(endGameText, restartButton);
    document.body.append(endGameContainer);
}
