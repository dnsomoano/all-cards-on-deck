// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
"use strict";
// document.addEventListener('DOMContentLoaded', main)
// Starting arrays
const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];

let deck = [];

// Functions are daisy-chained together
const createDeckAndShuffle = () => {
  // First loop = 13 * Second loop 4 = 52 loops
  // First loop
  deck = [];
  for (let i = 0; i < ranks.length; i++) {
    // second loop
    for (let j = 0; j < suits.length; j++) {
      // Bucket for temporary values
      deck.push(ranks[i] + " of " + suits[j]);
      // Call list of cards
      //   console.log(cards);
    }
  }
  // Call length of array to confirm 52 cards
  //   console.log(cards.length);
  shuffle();
};

// Fisher-Yates Shuffle
let shuffle = () => {
  // For loop will loop 52x
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * i);
    // temporary bucket for array deck
    const temp = deck[j];
    // value which dumped into temporary is overwritten
    deck[j] = deck[i];
    // temporary bucket overwrites the previous array that overwrote
    deck[i] = temp;
  }
  // pop method removes the last element in the array deck
  resultCard();
};

const resultCard = () => {
  let hand = deck.pop();
  // debug message for pop value
  console.log(hand);
  // Create new line element for result
  const newLi = document.createElement("li");
  // New line writes the last element named hand
  newLi.textContent = hand;
  // Calls new line back to the DOM
  document.querySelector("#random-result").appendChild(newLi);
};

// Event listeners
document.querySelector(".shuffle-button").addEventListener("click", createDeckAndShuffle);
// const randomResultSelector = document.querySelector('.random-result').value
// Event listener for testing shuffle
