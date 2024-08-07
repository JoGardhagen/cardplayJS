import Deck from './components/deck.js';
import { renderHand, renderDiscardPile, playCard} from './components/gameplay.js';

const playerHandDiv = document.getElementById('player-hand');
const discardPileDiv = document.getElementById('discard-pile');
const drawCardButton = document.getElementById('draw-card-button');

const deck = new Deck();
const discardPile = [];
let playerHand = deck.drawMultipleCards(5);

drawCardButton.addEventListener('click', () => {
    const drawnCards = deck.drawMultipleCards(3);
    playerHand.push(...drawnCards);
    renderHand(playerHand, playerHandDiv, playCard);
});

function init() {
    renderHand(playerHand, playerHandDiv, playCard);
    renderDiscardPile(discardPile, discardPileDiv);
}

init();
