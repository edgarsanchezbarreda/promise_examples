let newDeck = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const btn = document.querySelector('#cardBtn');
const cardSpace = document.querySelector('#cardSpace');
let deckId;

window.onload = axios.get(newDeck)
    .then(res => {
        deckId = res.data.deck_id
    })
    .catch(err => {
        console.log(err)
    })

const showDeckId = () => {
    console.log(deckId)
}


let cardImg;
const drawCard = () => {
    let newCard = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

    axios.get(newCard)
        .then(res => {
            cardImg = res.data.cards[0].image
            console.log(cardImg)

        })
        .catch(err => {
            console.log(err)
        })
}


btn.addEventListener('click', function () {
    cardSpace.innerHTML = "";
    drawCard();
    let card = document.createElement('img');
    card.setAttribute('src', cardImg);
    cardSpace.appendChild(card);
})