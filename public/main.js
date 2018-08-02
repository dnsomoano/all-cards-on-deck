// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)
// Starting arrays
const suits = [ 'clubs', 'diamonds', 'hearts', 'spades' ];
const ranks = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

let deck = [];
const createDeck = () => {
	//   number totalCards = 52;
	for (i = 0; i < ranks.length; i++) {
		for (j = 0; j < suits.length; j++) {
			cards = ranks[i] + ' of ' + suits[j];
			deck.push(cards);
			console.log(cards);
		}
	}
	console.log(deck.length);
};

let shuffle = () => {
	for (i = 0; i < deck.length; i++) {
		let j = Math.floor(Math.random() * i);
		temp = deck[j];
		deck[j] = deck[i];
		deck[i] = temp;
	}
	let hand = deck.pop()
	console.log(hand);
};
// let shuffle = () => {
// 	for (i = 0; i < deck.length; i++) {
// 		let j = Math.floor(Math.random() * i);
// 		temp = deck[j];
// 		deck[j] = deck[i];
// 		deck[i] = deck[j];
// 	}
// 	console.log(deck[j]);
// };

// Event listeners
document.querySelector('.create-deck-button').addEventListener('click', createDeck);
document.querySelector('.shuffle-button').addEventListener('click', shuffle);
