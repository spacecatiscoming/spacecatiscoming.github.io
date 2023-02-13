import './util.js';
import './dom.js';
import './view.js';
import './config.js';
import { arrOfSentence } from './util.js'; //Array of Sentences
import {titleH1, resultText, wordContainer, timerEl, startTyping, timeBtn, wordsBtn, timersDiv, selectMenu, timeContainer, wordsContainer } from './dom.js'; //DOM Elements
import { secondsEl, charactersEl, percentEl, resultContainer } from './dom.js'; // DOM ELEMENTS FOR SHOW RESULT;
console.log('Import module');
import { nightMode } from './view.js';




titleH1.addEventListener('click', function(e) {
	location.reload();
}); 

//Variables for timer with Zeros
let second = 0;
let	minute = 1;

// Default Timer
let countTimer = 60; // THIS  Variable Change From changeTimeFunc() FUNCTION
// Default Words 
let countWords = 100; // THIS Variable Change From changeWordLength() FUNCTION



// Buttons to change text Randomly and Change the timer of Typing
function funcButtons(btn1, btn2) {
	btn1.classList.add('active');
	btn2.classList.remove('active');
}

wordsBtn.addEventListener('click', function(e) {
	changeWordLength('.word-container', '.count--word');
	funcButtons(wordsBtn, timeBtn);
	timeContainer.style.visibility = 'hidden';
	wordContainer.style.visibility = 'visible';
});

timeBtn.addEventListener('click', function() {
	changeTimeFunc('.time-container', '.count--time');
	funcButtons(timeBtn, wordsBtn);
	wordContainer.style.visibility = 'hidden';
	timeContainer.style.visibility = 'visible';
});

//Get Random Sentence from the array ///////////////////
function randomSentence(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

// Display Sentence in the UI
function displaySentence(text, length) {
	wordsContainer.innerHTML = '';
	const word = document.createElement('div');
	word.classList.add('word');
	let shortText = text.split(' ').slice(0, length).join(' ');
	
	shortText.split('').forEach(char => {
		const html = `<span class="char">${char}</span>`;
		word.innerHTML += html;
		
		wordsContainer.insertAdjacentElement('afterbegin', word);
	});
}
// Here we callfunction to get Random Sentence
displaySentence(randomSentence(arrOfSentence), countWords);
// END FUCNTION WHICH DISPLAY CHARACTERS/////////////////


// App Logic
// Counter of Characters
const countChar = document.querySelector('.char-count');
// All Characters
let span = Array.from(document.querySelectorAll('.char'));
// Count All Characters
let maxChars = span.length;
// Letters Array
const lettersArr = []; // Letters Array from Init() Function
// Lenght of Person Characters
let personMaxChars = 0;
// Percent from all Characters
let percent = 0;
let i = 0; //Counter for letter in the Init() Function
let typing = true; // Typing variable from Init() Function
let resultArr = []; // Result Words Array from Init() Function
// LOGIC VARIABLES /////////////////////




// Timer Function Start Typing and When counter is 0 we Stop Typing
// TIMER END ///////////////////
let id;
function startTimer() {
	clearInterval(id);
	  second;
	  minute;
	  timerEl.style.visibility = 'visible';
	
	  id = setInterval(function () {
		
		timerEl.innerHTML =
		  (minute < 10 ? "0" + minute : minute) +
		  ":" +
		  (second < 10 ? "0" + second : second);
  
		if (second === 0) {

		  if (minute === 0) {
			// Full done
			clearInterval(id);
			showResult();
			typing = false;
			console.log('Time is over');
		  }
		  minute--;
		  second = 60;
		}
		second--;
	  }, 1000);
  };
// // TIMER END ///////////////////



// Start Typing Button EVENT /////////////
startTyping.addEventListener('click', function(e) {
	initFunc('#e2b714');
	// timer(countTimer);
	startTimer();
	countChar.textContent = 0;
	// document.querySelector('.word').style.webkitFilter = "blur()";
	hideFuncContainer(); // Hide FUNCTION CONTAINER IN THE HEADER
	document.querySelector('.day').remove();
	document.querySelector('.night').remove();
});
// END TYPING BUTTON //////////////////////////////


// Main Typing Function We start This Function When we push the start button
function initFunc(color) {
	document.addEventListener('keydown', function(e) {
		if(typing) {
		  if(e.key === span[i].textContent) {
			  lettersArr.push(span[i].textContent);
			  span[i++].style.color = color;
			  countChar.textContent = i;
		  } else {
			span[i].style.color = '#FF0000';
			setTimeout(() => {
				span[i].style.color = '#646669';
			},800);
			return;
		}
		  // LENGTH OF WORDS
		  resultArr = lettersArr.join('').split(' ');
		  compareResults();
		}
	});
}
// INIT FUNCTION END ///////////////////////////////////////////////



function compareResults() {
	if(lettersArr.length === maxChars || resultArr.length - 1 === countWords) {
	   getValues();
	   clearInterval(id);
	   typing = false;
	   showResult();
	 } else {
	   getValues();
	   console.log(`${Math.trunc(percent)}%`);
    }
}

// GET VALUES FOR TEST RESULT ///////////
function getValues() {
	personMaxChars = lettersArr.length;
	percent = 100 * personMaxChars / maxChars;
}
///////////////////////////////

////////////////////////////////////////////////////
// HIDE FUNCTION CONTAINER (THEME, TIME, WORDS)
function hideFuncContainer() {
	document.querySelector('.func-container').style.visibility = 'hidden';
	timersDiv.style.visibility = 'hidden';
	startTyping.style.visibility = 'hidden';
	timeContainer.style.visibility = 'hidden';
	wordContainer.style.visibility = 'hidden';
}




//////////////////////////////////////////////////////
// Show Result Functions
function resultMsg(msg) {
	resultText.style.opacity = 1;
	resultText.textContent = msg;
}

function finalMessage() {
	if(percent < 20) {
		resultMsg('You type like an Old man.');
	} else if(percent < 30) {
		resultMsg('My grandmother can do it faster.');
	} else if(percent < 40) {
		resultMsg(`The keyboard doesn't recognize you.`)
	} else if(percent < 50) {
		resultMsg(`Have you seen cats typing on the Keyboard? Do it like Cats.`);
	} else if(percent < 60) {
		resultMsg(`Now be brave and don't look back. Don't look back.`);
	} else if(percent < 70) {
		resultMsg(`Attention drives reality.`);
	} else if(percent < 80) {
		resultMsg(`Concentrate on the moment. Feel, not think. Use your instincts.`)
	} else if(percent < 90) {
		resultMsg(`May the Force be with you.`)
	} else if(percent < 100) {
		resultMsg(`Use the power, Luke!`);
	} else {
		resultMsg(`I am a Jedi, just like my father!`);
	}
}


function showResult() {
	secondsEl.textContent = `${countTimer}s`;
	charactersEl.textContent = `${personMaxChars} / ${resultArr.length}`;
	percentEl.textContent = `${Math.trunc(percent)}%`;
	resultContainer.style.opacity = 1;
	finalMessage();
}
////////////////////////////////////////////////


// RESET TEST ////////////////
const newtest = document.querySelector('.new-test_btn');
newtest.addEventListener('click', function() {
	location.reload(); 
});
///////////////////////////////




// Time and Words Generation Functions
function changeTimeFunc(element, cls) {
	document.querySelector(element).addEventListener('click', function(e){
		const clicked = e.target.closest(cls);
		if(!clicked) return;
		const data = clicked.dataset.time; //
		
	
		countTimer = parseInt(data);
		if(data < 60) {
			second = data;
			minute = 0;
		} else if(data === '60') {
			second = 0;
			minute = 1;
		} else {
			second = 0;
			minute = 2;
		}

		Array.from(document.querySelectorAll(cls)).forEach((item) => {
			item.classList.remove('active');
		});
		clicked.classList.add('active');
	
		e.stopPropagation();
	});
}

function changeWordLength(element, cls) {
	document.querySelector(element).addEventListener('click', function(e){
		const clicked = e.target.closest(cls);
		if(!clicked) return;
		const data = clicked.dataset.word;
	
		countWords = data;
		Array.from(document.querySelectorAll(cls)).forEach((item) => {
			item.classList.remove('active');
		});
		clicked.classList.add('active');

		displaySentence(randomSentence(arrOfSentence), countWords);
		span = Array.from(document.querySelectorAll('.char'));
	    maxChars = span.length;
		e.stopPropagation();
	});
}
///////////////////////////////////////////////



// THEME Functions
const colors = {
	1: '#ffcefb',
	2: '#d1d0c5',
	3: '#003950', //blue dolphin
	4: '#0058a3', // Sweden
	5: '#f37f83', //Strawberry
	6: '#20b2aa', //LightSeaGreen
	7: '#228b22', //ForestGreen
	8: '#ffdab9', //PeachPuff
	9: '#7B68EE', //MediumSlateBlue
	10: '#66CDAA', //MediumAquamarine
	11: '#011926', // Aurora
	12: '#323437', //Custom Color
};
// Создать обьект который будет менять Элементы страницы в зависимости выбранного цвета

// CHANGE THEME BACKGROUND COLOR ////////////////////////
function changeTheme(color) {
	document.body.style.backgroundColor = `${color}`;
}

selectMenu.addEventListener('change', function(e) {
	e.preventDefault();

	selectMenu.blur();
	console.log(selectMenu.value);
	if(selectMenu.value === 'color') {
		changeTheme(colors[12]); //Custom Color
	}

	if(selectMenu.value === '#0058a3') {
		console.log('The page Bacground is changed to Sweden');
		span.forEach((item) => {
			item.style.color = '#fff';
		});
	}
	changeTheme(selectMenu.value);
});
 
// THEME OBJECTS //////////////////////

const colorsObject = {
	classCSS1: 'peach--puff',
	classCSS2: 'medium--slate_blue',
	classCSS3: 'forest--green',
	classCSS4: 'light--sea_green',
	classCSS5: 'medium--aquamarine',
	classCSS6: 'sweden',
	classCSS7: 'strawberry',
	classCSS8: 'blue--dolphin',
	classCSS9: 'aurora',
	 changeUI(cls) {
		titleH1.classList.add(cls);
	 }
};




document.querySelector('.day').addEventListener('click', function(e) {
	nightMode('#fff', '#000');
	document.querySelector(".func-container").style.cssText = `
	background-color: #fff;
	border: 1px solid #000;
`;
	startTyping.style.cssText = `
		background-color: #fff;
		color: #000;
		border: 3px solid #000;
	`;
	titleH1.style.color = '#000';
});

document.querySelector('.night').addEventListener('click', function(e) {
	nightMode('#011926', '#fff');
	document.querySelector(".func-container").style.cssText = `
	background-color: #323437;
	border: none;
`;
	startTyping.style.cssText = `
		background-color: #e2b714;
		color: #fff;
		border: 3px solid #fff;
	`;
	titleH1.style.color = '#fff';
});
