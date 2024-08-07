let playerHand = [];
let discardPile = [];

function renderHand(hand, handDiv, playCardCallback) {
    handDiv.innerHTML = '';
    hand.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerText = `${card.rank} of ${card.suit}`;
        cardDiv.addEventListener('click', () => {
            playCardCallback(index);
        });
        handDiv.appendChild(cardDiv);
    });
}

function renderDiscardPile(pile, pileDiv) {
    pileDiv.innerHTML = '';
    if (pile.length > 0) {
        const card = pile[pile.length - 1];
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerText = card.toString();
        pileDiv.appendChild(cardDiv);
    }
}

function playCard(index) {
    const card = playerHand.splice(index, 1)[0];
    discardPile.push(card);
    renderHand(playerHand, document.getElementById('player-hand'), playCard);
    renderDiscardPile(discardPile, document.getElementById('discard-pile'));
}

export { renderHand, renderDiscardPile, playCard };
