class Card {
    static suits = ["♥", "♦", "♣", "♠"];
    static ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Card;
