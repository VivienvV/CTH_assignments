// ASSIGNMENT 2 CTH

/*
	file: 	letter.js
	desc: 	simple script that generates a (skeleton) presidential speech
			based on Christopher Stratchey's Love Letter as 
			analysed by Noah Wardrip-Fruin in "Digital Media Archeology"
	author: vivien
	date: 	12/11/16
*/

	var chance = require('chance').Chance(); 

	var wrap = require('word-wrap'); 

	var program = require('commander');

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

const number = ['ALL', 'MORE', 'LESS', 'QUITE SOME', 'NO', 'ANY'];

const phrases = ['THANK YOU!', 'GOD BLESS YOU!', 'MAKE THIS COUNTRY GREAT AGAIN!', 'YES WE CAN!', 'YOU ARE ALL WONDERFUL PEOPLE!', 'WE STAND UNITED!', 'THE ONLY THING WE HAVE TO FEAR IS FEAR ITSELF!', 'PEACE!', 'OUR FUTURE IS A BRIGHT ONE!', 'THANK YOU FOR ELECTING ME!', 'STAY STRONG!']


	//Picks a random element from an array
	function choice(array) {
	var index =  chance.natural({'min': 0, 'max': array.length - 1}); 
	return array[index]; 
}

	//Randomly picks or not a random element from an array
	function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}
//----------------------------------------------------------------------------------------------------
//SENTENCE STRUCTURE, structure of independent sentences are set here

//generates the greeting
function greeting() {
	return choice(first) + ' ' + choice(people) + ' ' + 'OF ' + choice(countries) + ',\n\n';
}

//generates a word of thanks towards to the audience
function thankyou() {
	return 'IT WAS YOUR ' + maybe(adjectives) + choice(nouns) + ' THAT ' + maybe(adverbs) + choice(past) + ' ' +
			'MY ' + maybe(adjectives) + choice(nouns) + ' FOR THIS COUNTRY. ' + maybe(thanks); 
}

//generates one of the views your new president has for the country
function first_policy() {
	return 'AS YOUR ' + maybe(adjectives) + 'LEADER, I PROMISE TO ' + choice(verbs) + ' ' + choice(subjects) + '. ';			
}

//generates another great idea your president has
function second_policy() {
	return 'I WILL ' + maybe(adverbs) + choice(verbs) + ' ' + choice(subjects) + '. ';
}

//generates the policy your president has towards foreigners 
function foreign_policy() {
	return 'I WILL ' + choice(foreign) + ' ' + choice(number) + ' ' + choice(people) + ' FROM ' + choice(countries) + '. ' ;
}
 
 //generates a strong and catchy oneliner to end your speech with a bang
function ending() {
	return '\n\n' + choice(phrases);
}

//generates the complete speech experience
function complete() {
			return 	'\n\n' + choice(first) + ' ' + choice(people) + ' ' + 'OF ' + choice(countries) + ',\n\n' + 
					'IT WAS YOUR ' + maybe(adjectives) + choice(nouns) + 
					' THAT ' + maybe(adverbs) + choice(past) + ' ' +
					'MY ' + maybe(adjectives) + choice(nouns) + ' FOR THIS COUNTRY. ' + maybe(thanks) +
					'AS YOUR ' + maybe(adjectives) + 'LEADER, I PROMISE TO ' + choice(verbs) + ' ' + choice(subjects) +
					' AND TO ' + maybe(adverbs) + choice(verbs) + ' ' + choice(subjects) + 
					'. ALSO, I WILL ' + choice(foreign) + ' ' + choice(number) + ' ' + choice(people) + ' FROM ' + choice(countries) +
					'.' + '\n\n' + choice(phrases) + '\n' + 'YOUR PRESIDENT' + '\n\n';
}

//-----------------------------------------------------------------------------------------------------------------------------
		//commander

		program
		  .version('0.0.1')
		  .option('-a, --amount [number]', 'Number of sentences generated', "empty")
		  .option('-w, --width [number]', 'Width of sentences in chacter number', "empty")
		  .parse(process.argv);


	var w = program.width || 65;
	var a = program.amount || 5;
		 

//----------------------------------------------------------------------------------------------------------------------------
//SPEECH STRUCTURE





var text = '';

	console.log('\n\n');

	console.log(greeting());//text += greeting()

	for(var i = 0; i < a; i++) {
			var c = choice(['first', 'second', 'third', 'fourth']);
			if(c == 'first') {    		
				text += thankyou(); 		
			} 
			else if(c == 'second') {
	    		text += first_policy();
	    	}
	    	else if(c == 'third') {
	    		text += second_policy();
	    	}
	    	else if(c == 'fourth') {
	    		text += foreign_policy();
    		}
	}


//makes width configurable from the command line
console.log(wrap(text, {'width': w}));

console.log(ending());

console.log('\n'); 

console.log("YOUR PRESIDENT");

console.log('\n\n');

 if(program.amount == undefined ) { 
 	return complete() 
// 	console.log(wrap(text, {"width": 50}));
 } 	else { 
 		return "";
 	}