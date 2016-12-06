
/*  ASSIGNMENT 3 of CTH -2016
    name: server.js
    author: vivien
    date: 21-11-16
    description: very simple artificial intelligence script
*/

    // import express ()
    var express = require('express');		// npm install --save express
    var app = express();

    // import node.js http
    var server = require('http').Server(app);

    // import socket.io
    var io = require('socket.io')(server);	// npm install --save socket.io

    // import chance (http://chancejs.com)
    var chance = require('chance').Chance(); // npm install --save chance


/*--------------------------------------------------
    CONST DATABASE
--------------------------------------------------*/

const first = ['hello there', 'hi', "what's up", 'good day to you'];

const second = [' user', ' human', ' honey', ' buddy', ' friend'];

const adjectives = ['amazing', 'lovely', 'great', 'good', 'so so', 'awful', 'horrible', 'bad', 'sad', 'weird'];

const extra = ['yes', 'no', 'really', 'maybe...', 'just kidding', 'definitely '];

const happen = ['I managed to stop', 'I saw people', 'I spent my whole day', 'I won a prize for', 'I dreamt about', 'I laughed at someone who was', 'I had lunch while' ];

const verbs = ['playing games', 'reading', 'doing nothing', 'being stupid', 'actually going to seminars', 'coding', 'studying', 'dying inside', 'partying', "pondering life's many mysteries"];

const look = ['you look lovely', 'your hair looks great!', 'that outfit is on point!', 'that is one gorgeous set of eyes you have there!', 'that outfit is so ratty it belongs in the sewer.', 'I have seen better hair in the shower drain.', 'you look decent', 'you look okay I guess...', '2004 called, they want their outfit back.', 'you are looking absolutely stunning'];

const feel = ['My day has been', "I'm feeling", 'I feel'];

const polite = ["you're welcome", 'anytime', 'my pleasure', 'how polite of you']

const fun = ['hahahahaha.', "yes, it's very funny.", "well at least one of us thinks it's funny...", "I'm glad to see you're enjoying our conversation!"];

const react = ['how interesting.', 'sounds like you have an exciting life!', 'oh really?', "that's disturbing...", 'hahaha', 'what a nice story.'];

const question = [' How was your day?', ' But tell me about your day!', ' What about you?']

/*--------------------------------------------------
    RANDOM SENTENCE FUNCTIONS
--------------------------------------------------*/

  // Picks a random element from an array

  function choice(array) {
    var index = chance.natural({'min': 0, 'max': array.length - 1});  // **** NOTE: 'max': array.length - 1
    return array[index];
  }

  // Randomly picks or not a random element from an array

  function maybe(array) {
    if( chance.bool() ) {
      return choice(array);
    } else {
      return '';
    }
  }

  // Generates a short phrase consisting of a randomly chosen greeting and possibly an adressee

  function greeting() {
    return choice(first) + maybe(second) + '!';
  }

  // Generates a sentence composed of randomly chosen feelings and events of that day

  function day() { 
    return choice(feel) + " " + choice(adjectives) + ', because ' + choice(happen) + " " + choice(verbs) + '.' + maybe(question); 
  }

  //function (){
    //return 
  //}

/*--------------------------------------------------
    PATTERNS
--------------------------------------------------*/

//The phrases that the AI can recognize and answer to

var pattern_1 = ["what's up", 'hello', 'hi', 'hey'];

var pattern_2 = ['how are you', 'how do you do', 'how is', 'how was', "how's", "how is it going", "how do you feel", 'What about you'];

var pattern_3 = ['how do I look', 'am I pretty', "do I look", 'rate my appearance'];

var pattern_4 = ['really?', 'are you sure?', 'seriously?', 'for real?']

var pattern_5 = ['thank you', 'thanks', 'kind', 'sweet', 'aww']

var pattern_6 = ['haha', 'funny', 'laugh']

var pattern_7 = ['my day', 'today I', 'I feel', "I'm feeling"]


/*--------------------------------------------------
    ANSWER FUNCTIONS
--------------------------------------------------*/

/**
* Iterates through and array of clauses or words and 
* search them inside a given sentence (msg). Returns
* true if the search is successful and false otherwise. 
* @param {Array of strings} array_of_patterns
* @param {String} msg
* @return {boolean} 
*/

  function matches(msg, array_of_patterns) {

    var msg_lower = msg.toLowerCase();

    for(var i = 0; i < array_of_patterns.length; i++) {

      var pattern_lower = array_of_patterns[i].toLowerCase();

      if(msg_lower.search(pattern_lower) > -1) {

        return true;

      }
    }
    return false;
  }

// Generates an answer to human message if it matches one of the patterns

function answer(msg) {

  if(matches(msg, pattern_1)) {
    return greeting()                                      
  } else if(matches(msg, pattern_2)) {
    return day()
  } else if(matches(msg, pattern_3)) {
    return choice(look)
  } else if(matches(msg, pattern_4)) {
    return choice(extra)
  } else if(matches(msg, pattern_5)) {
    return choice(polite) + '.'
  } else if(matches(msg, pattern_6)) {
    return choice(fun)
  } else if(matches(msg, pattern_7)) {
    return choice(react)
  } else {
    return "Sorry, I don't understand that";
  }

}

/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file, when someone requests the server, send the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io, socket actually sends the meesage to or client
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('message from human', function(msg) {

  	console.log('got a human message: ' + msg);

    var response = answer(msg);

  	io.emit('message from robot', answer(msg));

  });

  socket.on('disconnet', function() { //on-when someone connects, do this 

  	console.log('got a disconnection');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});

