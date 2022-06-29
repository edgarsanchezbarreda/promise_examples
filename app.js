// Part 1 Number Facts

let url = "http://numbersapi.com"

// #1

// axios.get(`${url}/9?json`)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// #2

// numberFactPromises = [];

// for (let i = 1; i < 4; i++) {
//     numberFactPromises.push(
//         axios.get(`${url}/${i}`)
//     );
// }

// Promise.all(numberFactPromises)
//     .then(numberFactArr => {
//         for (res of numberFactArr) {
//             console.log(res.data)
//         }
//     })
//     .catch(err => console.log(err))


// #3

// numberFactPromises = [];

// for (let i = 1; i < 5; i++) {
//     numberFactPromises.push(
//         axios.get(`${url}/4`)
//     );
// }

// Promise.all(numberFactPromises)
//     .then(numberFactArr => {
//         for (res of numberFactArr) {
//             console.log(res.data)
//         }
//     })
//     .catch(err => console.log(err))


// Part 2 Deck of Cards

// #1
// let cardUrl = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'

// axios.get(cardUrl)
//     .then(res => {
//         for (card of res.data.cards) {
//             console.log(`${card.value} of ${card.suit}.`)
//         }
//     })
//     .catch(err => {
//         console.log(err)
//     })

// #2
// let cardUrl = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'

// let cards = [];

// for (let i = 1; i < 3; i++) {
//     cards.push(axios.get(cardUrl));
// }
// Promise.all(cards)
//     .then(cardsArr => {
//         for (res of cardsArr) {
//             console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}.`)
//         }
//     })