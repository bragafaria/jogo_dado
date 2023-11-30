'use strict';

//Selecting Score Elements using different methods
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const bgStatus0 = document.querySelector('.player--0');
const bgStatus1 = document.querySelector('.player--1');
const winner0 = document.getElementById('name--0');
const winner1 = document.getElementById('name--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

//Adding hidden class to dice PNG
diceEl.classList.add('hidden');

let currentPlayer = 0;
let currentScoreP0 = 0;
let addedScoreP0 = 0;
let currentScoreP1 = 0;
let addedScoreP1 = 0;

//Rolling Dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a rendom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the Dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden'); /* Using a Classlist you have to remove the
  DOT form the class!!!! */

  //3 Check for rolled 1. If true, switch player.
  if (dice !== 1) {
    //Add dice to the current score
    if (currentPlayer % 2 === 0) {
      currentScoreP0 += dice;
      current0El.textContent = currentScoreP0;
    } else {
      currentScoreP1 += dice;
      current1El.textContent = currentScoreP1;
    }
  } else {
    if (currentPlayer % 2 === 0) {
      bgStatus0.classList.remove('player--active');
      bgStatus1.classList.add('player--active');
    } else {
      bgStatus0.classList.add('player--active');
      bgStatus1.classList.remove('player--active');
    }

    //switch to the next player
    currentPlayer += 1;
    currentScoreP0 = 0;
    current0El.textContent = 0;
    currentScoreP1 = 0;
    current1El.textContent = 0;
  }
});

btnHold.addEventListener('click', function () {
  // Player 0

  if (currentPlayer % 2 === 0) {
    addedScoreP0 += currentScoreP0;

    if (addedScoreP0 >= 100) {
      winner0.classList.add('namew');
      winner0.classList.remove('name');
      winner0.textContent = 'Player 1 Wins!';
      score0El.textContent = addedScoreP0;
    } else {
      score0El.textContent = addedScoreP0;
    }
    currentPlayer += 1;
    bgStatus0.classList.remove('player--active');
    bgStatus1.classList.add('player--active');
  }
  //Player 01
  else {
    addedScoreP1 += currentScoreP1;

    if (addedScoreP1 >= 100) {
      winner1.classList.add('namew');
      winner1.classList.remove('name');
      winner1.textContent = 'Player 2 Wins!';
      score1El.textContent = addedScoreP1;
    } else {
      score1El.textContent = addedScoreP1;
    }
    currentPlayer += 1;
    bgStatus0.classList.add('player--active');
    bgStatus1.classList.remove('player--active');
  }
  currentScoreP0 = 0;
  current0El.textContent = 0;
  currentScoreP1 = 0;
  current1El.textContent = 0;
});

btnNew.addEventListener('click', function () {
  currentPlayer = 0;
  currentScoreP0 = 0;
  current0El.textContent = 0;
  score0El.textContent = 0;
  addedScoreP0 = 0;
  currentScoreP1 = 0;
  current1El.textContent = 0;
  score1El.textContent = 0;
  addedScoreP1 = 0;
  bgStatus0.classList.add('player--active');
  bgStatus1.classList.remove('player--active');
});
