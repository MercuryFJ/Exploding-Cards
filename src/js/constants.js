// --- CONSTANTS ---

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

