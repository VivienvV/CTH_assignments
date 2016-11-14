// ASSIGNMENT 2 CTH

/*
	file: 	letter.js
	desc: 	simple script that generates a (skeleton) presidentials speech
			based on Christopher Stratchey's Love Letter as 
			analysed by Noah Wardrip-Fruin in "Digital Media Archeology"
	author: vivien
	date: 	12/11/16
*/

// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

// import word-wrap (https://www.npmjs.com/package/word-wrap)
var wrap = require('word-wrap'); // npm install --save word-wrap

// All possible words
const first = ['HONARABLE', 'DEAR', 'GOOD', 'BRAVE'];

const people = ['CITIZENS', 'PEOPLE', 'INHABITANTS', 'RESIDENTS', 'IMMIGRANTS'];

const countries = ['AUSTRALIA', 'BRAZIL', 'CANADA', 'DENMARK', 'EGYPT', 'FRANCE', 'MEXICO', 'RUSSIA', 'THE NETHERLANDS', 'THE UNITED STATES OF AMERICA', 'CHINA', 'JAPAN', 'CUBA', 'ETHIOPIA', 'BELGIUM', 'GREENLAND', 'INDIA', 'AFGHANISTAN', 'GERMANY', 'THAILAND'];

const past = ['SPARKED', 'IGNITED', 'STARTED', 'CREATED', 'GAVE ME', 'INSPIRED', 'LAUNCHED'];

const thanks = ['FOR THIS I THANK YOU. ', 'WORDS CANNOT EXPRESS MY GRATITUDE. ', 'YOU HAVE MY HEARTFELT THANKS. ', 'I THANK YOU FROM THE BOTTOM OF MY HEART. ', 'IT IS BECAUSE OF YOU THAT I STAND HERE TODAY. '];

const adjectives = ['GREAT ', 'POLITICAL ', 'RIGHTFUL ', 'PATRIOTIC ', 'NATIONAL ', 'DUTIFUL ', 'GRATEFUL ', 'AFFECTIONATE ', 'ARDENT ', 'AVID ', 'DEVOTED ', 'EAGER ', 'FOND ', 'LOVING ', 'PASSIONATE ', 'PRECIOUS ', 'SYMPATHETIC ', ];

const nouns = ['IDEAS', 'VISION', 'DREAM', 'SENSE OF DUTY', 'PATRIOTISM', 'POLITICS', 'PRIDE', 'ADORATION', 'AMBITION', 'DESIRE', 'DEVOTION', 'ENTHUSIASM', 'FONDNESS', 'HEART', 'LONGING', 'LOVE', 'PASSION', 'WISH'];

const adverbs = ['LEGALLY ', 'VIRTIOUSLY ', 'DUTIFULLY ', 'FREQUENTLY ', 'LOVINGLY ', 'PRIDEFULLY ', 'GRATEFULLY ', 'RIGHTFULLY ', 'AFFECTIONATELY ', 'AVIDLY ', 'DEVOTEDLY ', 'EAGERLY ', 'FONDLY ', 'PATIENTLY ', 'EFFECTIVELY '];

const verbs = ['PROTECT', 'HELP WITH', 'EXPLOIT', 'HELP BUILD', 'STIMULATE', 'DEFEND', 'FIGHT FOR', 'PRESERVE', 'NOURISH', 'WATCH OVER', 'SUPPORT', 'ENCOURAGE', 'PRAY FOR', 'IGNORE'];

const subjects = ['THE ENVIRONMENT', 'THE ECONOMY', 'THE BOURGEOISE', 'THE POOR', 'THE LAW', 'YOUR RIGHTS', 'THE MILITARY', 'YOUR JOBS', 'YOUR WELLBEING', 'TRADES', 'PEACE', "SECURITY", "JUSTICE", 'YOUR FREEDOM'];

const foreign = ['WELCOME', 'BRING IN', 'DEPORT', 'SEND AWAY', 'THROW OUT', 'TOLERATE', 'OPEN OUR BORDERS FOR', 'KEEP OUT'];

const number = ['ALL', 'MORE', 'LESS', 'QUITE SOME', 'NO'];

const phrases = ['THANK YOU!', 'GOD BLESS YOU!', 'MAKE THIS COUNTRY GREAT AGAIN!', 'YES WE CAN!', 'I LOVE YOU!', 'WE STAND UNITED!', 'THE ONLY THING WE HAVE TO FEAR IS FEAR ITSELF!', 'PEACE!', 'OUR FUTURE IS A BRIGHT ONE!', 'THANK YOU FOR ELECTING ME!', 'STAY STRONG!']

/**
*	Picks a random element from an array
*	@param {Array} array
*	@return {Object} choice
*/
function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});  // **** NOTE: 'max': array.length - 1
	return array[index];
}

/**
*	Randomly picks or not a random element from an array
*	@param {Array} array
*	@return {Object} choice 
* 	@return {String} empty string
*/
function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}

/**
*	Generates a sentence composed of randomly chosen 
*	countries, adjectives, nouns, adverbs, verbs, phrases, subjects and numerals.
*	@return {String} sentence
*/
function long() {
			return 	choice(first) + ' ' + choice(people) + ' ' + 'OF ' + choice(countries) + ',\n\n' + 
					'IT WAS YOUR ' + maybe(adjectives) + choice(nouns) + 
					' THAT ' + maybe(adverbs) + choice(past) + ' ' +
					'MY ' + maybe(adjectives) + choice(nouns) + ' FOR THIS COUNTRY. ' + maybe(thanks) +
					'AS YOUR ' + maybe(adjectives) + 'LEADER, I PROMISE TO ' + choice(verbs) + ' ' + choice(subjects) +
					' AND TO ' + maybe(adverbs) + choice(verbs) + ' ' + choice(subjects) + 
					'. ALSO, I WILL ' + choice(foreign) + ' ' + choice(number) + ' ' + choice(people) + ' FROM ' + choice(countries) +
					'.' + '\n\n' + choice(phrases) + '\n' + 'YOUR PRESIDENT';
}

// format for the output (header)
console.log('\n\n\n\n'); 

var text = '';

// loop for generating certain amount of sentence. Currently set as 1.
for(var i = 0; i < 1; i++) {

	text += long();	
}

// width of sentences in amount of character
console.log(wrap(text, {'width': 70}));

// format for the output (footer)
console.log('\n\n\n\n');
