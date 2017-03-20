var questionAndAnswer = [{
    question: "Who won the NBA finals in 2016",
    answers: [{
        questions: "Cleveland Cavilairs",
        result: false,
    }, {
        questions: "Golden State Warriors",
        result: false,
    }, {
        questions: "San Antonio Spurs",
        result: false
    }, {
        questions: "Chicago Bulls",
        result: true
    }],
}, {
    question: "Who was the first Unanimous MVP",
    answers: [{
        questions: "Stephan Curry",
        result: false,
    }, {
        questions: "Lebron James",
        result: false,
    }, {
        questions: "Derrick Rock",
        result: false
    }, {
        questions: "Tom Brady",
        result: true
    }],
}, {
    question: "What was the last team to win consecutive championships ",
    answers: [{
        questions: "Bulls",
        result: false,
    }, {
        questions: "Lakers",
        result: false,
    }, {
        questions: "Miami Heat",
        result: false
    }, {
        questions: "Golden State Warriors",
        result: true
    }]
}];


var correctAnswers = 0;
var incorrectAnswers = 0;
var indexHolder = 0;
var timer;
var intervalId;

$('#startGame').click(function() {
    displayQuestion();
});


$('.usersChoices').on('click', function() {
    console.log($(this).attr('value'));
    if ($(this).attr('value') === true) {
        clearInterval(intervalId);
        incorrectGuess();
        console.log("correct");
    } else if ($(this).attr('value') === false) {
        clearInterval(intervalId);
        correctAnswer()
        console.log("Try again")
    }

});



function displayQuestion() {
    $('#question').text(questionAndAnswer[indexHolder].question);
    var location = questionAndAnswer[indexHolder].answers
    $('#questionDiv p:nth-child(3)').html(location[0].questions).attr("value", location[0].result);
    $('#questionDiv p:nth-child(4)').html(location[1].questions).attr("value", location[1].result);
    $('#questionDiv p:nth-child(5)').html(location[2].questions).attr("value", location[2].result);
    $('#questionDiv p:nth-child(6)').html(location[3].questions).attr("value", location[3].result);
    startTimer();
}

function startTimer() {
    timer = 100;
    intervalId = setInterval(decrement, 1000);

}


function decrement() {
    if (timer === 0) {
        clearInterval(intervalId);
        incorrectGuess();
    } else {
        timer--;
        $('#countDown').html(timer);
    }
}

function incorrectGuess() {
    console.log("Sorry, you done messed up!");
    indexHolder++;
    if (indexHolder <= 2) {
        setTimeout(displayQuestion, 5000);
    }
}
