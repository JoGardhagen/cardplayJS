import Card from './card.js';

class Deck {
    constructor() {
        this.cards = [];
        for (let suit = 0; suit < Card.suits.length; suit++) {
            for (let rank = 0; rank < Card.ranks.length; rank++) {
                this.cards.push(new Card(rank, suit));
            }
        }
        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        return this.cards.pop();
    }

    drawMultipleCards(count) {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    }
}

export default Deck;
