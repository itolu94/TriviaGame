var questionAndAnswer = [{
    question: "Who won the NBA finals in 2016",
    answers: [{
        answer: "Cleveland Cavilairs",
        isCorrect: true,
    }, {
        answer: "Golden State Warriors",
        isCorrect: false,
    }, {
        answer: "San Antonio Spurs",
        isCorrect: false
    }, {
        answer: "Chicago Bulls",
        isCorrect: false
    }, 'https://media.giphy.com/media/xT8qBd0tFdFV7l0gr6/giphy.gif']
}, {
    question: "Who was the first Unanimous MVP",
    answers: [{
        answer: "Stephan Curry",
        isCorrect: false,
    }, {
        answer: "Lebron James",
        isCorrect: false,
    }, {
        answer: "Derrick Rock",
        isCorrect: false
    }, {
        answer: "Tom Brady",
        isCorrect: true
    }, 'https://media.giphy.com/media/PuHp0vHXEGbUQ/giphy.gif' ]
}, {
    question: "What was the last team to win consecutive championships ",
    answers: [{
        answer: "Bulls",
        isCorrect: false,
    }, {
        answer: "Lakers",
        isCorrect: false,
    }, {
        answer: "Miami Heat",
        isCorrect: false
    }, {
        answer: "Golden State Warriors",
        isCorrect: true
    }, 'https://media.giphy.com/media/l46Craj343bB2TMSA/giphy.gif']
}];


var correctAnswers = 0;
var incorrectAnswers = 0;
var indexHolder = 0;
var timer;
var intervalId;
var currentQuestion;

// when button is clicked, game begins. 
$('#startGame').click(function() {
    displayQuestion();
    $(this).off();
});


$(document).on('click', ".usersChoice", function() {
    console.log($(this).attr('value'));
    if ($(this).attr('value') === 'true') {
        clearInterval(intervalId);
        correctGuess();
    } else if ($(this).attr('value') === 'false') {
        clearInterval(intervalId);
        incorrectGuess();
    }     
});


// Displays the questions on screen
function displayQuestion() {
	$('.whiteBackground img').remove();
    $('#question').text(questionAndAnswer[indexHolder].question);
    currentQuestion = questionAndAnswer[indexHolder].answers
    for (var i = 0; i <= 3; i++) {
        var newParagraphTag = $('<p>');
        newParagraphTag.text(currentQuestion[i].answer).attr({ value: currentQuestion[i].isCorrect, 'class': 'usersChoice' })
        $(newParagraphTag).insertAfter($('#countDown'));
    }
    startTimer();
}




// Count down for the timer
function startTimer() {
    timer = 100;
    intervalId = setInterval(decrement, 1000);

}

// Determins if thetimmer is 0 and also decreases the time by 1 second
function decrement() {
    if (timer === 0) {
        clearInterval(intervalId);
        incorrectGuess();
    } else {
        timer--;
        $('#countDown').text(timer);
    }
}


function incorrectGuess() {
    console.log("Sorry, you done messed up!");
    incorrectAnswers++
    indexHolder++;
    $('#question').text("Incorrect")
    $('.usersChoice').remove();
    newImg = $('<img src="' + currentQuestion[4] + '">');
     $(newImg).insertAfter($('#countDown'));
    if (indexHolder <= questionAndAnswer.length) {
        setTimeout(displayQuestion, 5000);
    }
    else {
    	gameFinished();
    }
}


function correctGuess() {
    console.log("Correct Answer");
    correctAnswers++;
    indexHolder++;
    $('#question').text("Correct")
    $('.usersChoice').remove();
    newImg = $('<img src="' + currentQuestion[4] + '">');
    $(newImg).insertAfter($('#countDown'));
    if (indexHolder <= questionAndAnswer.length) {
        setTimeout(displayQuestion, 5000);
    }
}


function gameFinished () {
	$('#question').text("Heres your result")	
}
