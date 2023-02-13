console.log('Export from DOM.js');
export {titleH1, resultText, wordContainer, timerEl, startTyping, timeBtn, wordsBtn, selectMenu, timersDiv, timeContainer, wordsContainer };
export {secondsEl, charactersEl, percentEl, resultContainer};


// DOM ELEMENTS
const titleH1 = document.querySelector('.title');
const resultText = document.getElementById('result--text');
// const container = document.querySelector('.container');
// const funcContainer = document.querySelector('.func-container');
const wordsContainer = document.querySelector('#words');
// const letters = Array.from(document.querySelectorAll('span'));
const timerEl = document.querySelector('.timer');
const startTyping = document.querySelector('.start-btn');
const timeBtn = document.querySelector('.time-btn');
const wordsBtn = document.querySelector('.words-btn');
// const word = document.querySelector('.word');
const timersDiv = document.querySelector('.timers');
const selectMenu = document.querySelector('#colors');
const timeContainer = document.querySelector('.time-container');
const wordContainer = document.querySelector('.word-container');

// Result DOM ELEMENTS
const secondsEl = document.getElementById('seconds');
const charactersEl = document.getElementById('character');
const percentEl = document.getElementById('percent');
const resultContainer = document.getElementById('result-container');