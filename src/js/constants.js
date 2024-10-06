//DOM constants
//Container of the card. This will be contains the type and the value of the card.
export const cardElement = document.createElement("div");
//This button allows you to draw a card.
export const drawButton = document.createElement("button");
//This represents the type of the card in the card container.
export const cardType = document.createElement("h1");
//This represents the value of the card in the card container (only with points card type).
export const cardValue = document.createElement("h1");
//This button allows to restart the game.
export const restartButton = document.createElement("button");
//It notifies you that the game has ended.
export const endGameText = document.createElement("h1");

//Types of cards to be inserted into the deck by type
export const CARD_TYPES = {
    BOMB: "Bomb",
    DEFUSE: "Defuse",
    SKIP_TURN: "Skip Turn",
    NOPE: "Nope",
    POINTS: "Points"
};

//Number of cards to be inserted into the deck by type
export const CARD_VALUES = {
    BOMB: 4, 
    DEFUSE: 6, 
    SKIP_TURN: 10, 
    NOPE: 5, 
    POINTS: 35 
}

//Maximum and minimum number of points that the points-type card can have.
export const MAX_NUM_POINTS = 10;
export const MIN_NUM_POINTS = 1;

