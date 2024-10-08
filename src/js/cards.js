// --- CLASS CARD ---
export class Card {
    type;
    value;
    desc;
    icon;
    color;

    constructor(type, value = null) {
        this.type = type;
        this.value = value;

        switch (type) {
            case "Bomb":
                this.desc = "If you draw one and don't have a Defuse card, you lose.";
                this.icon = "src/images/bomb.png";
                this.color = "black";
                break;
            case "Defuse":
                this.desc = "You can keep all the ones you draw in your hand";
                this.icon = "src/images/defuse.png";
                this.color = "green";
                break;
            case "Skip Turn":
                this.desc = "They allow you to avoid drawing a card.";
                this.icon = "src/images/skip_turn.png";
                this.color = "blue";
                break;
            case "Nope":
                this.desc = "If an opponent wants to skip a turn, you can cancel it using this card; bothare discarded.";
                this.icon = "src/images/nope.png";
                this.color = "red";
                break;
            case "Points":
                this.desc = "If the game ends and more than one player is alive, the one with the most points wins.";
                this.icon = "src/images/point.png";
                this.color = "white";
                break;
            default:
                this.desc = "Error, the description is wrong, check the types of cards."
                this.icon = "Error, wrong image, check the types of cards."
        }
    }

};