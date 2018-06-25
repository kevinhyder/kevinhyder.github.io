'use strict'

const questions = [
    {
        number: 1,
        question: 'In the Star Wars universe, what exactly are midi-chlorians?',
        answer1: 'Found in the center of dead stars, midi-chlorians power the galaxy\'s lightsabers and energy weapons.',
        answer2: 'Found in the blood of all living creatures, they are microscopic creatures that connect users to the Force.',
        answer3: 'Found in the gases of the outer rim, midi-chlorians are minerals refined into starship fuel.',
        answer4: 'Found in certain alien species, they are used in bacta-suits for accelerated healing.',
        correct: 'answer2',
        image: 'quigon.png'
    },
    {
        number: 2,
        question: 'During the Separatist War, the Republic utilized a clone army to fight the Trade Federation. Those soldiers were clones of which Bounty Hunter?',
        answer1: 'Bossk',
        answer2: 'Boba Fett',
        answer3: 'Jango Fett',
        answer4: 'Cad Bane',
        correct: 'answer3',
        image: 'clone.png'
    },
    {
        number: 3,
        question: 'In the events that took place during A New Hope, which planet did Grand Moff Tarkin order destroyed by the Death Star?',
        answer1: 'Dantooine',
        answer2: 'Tatooine',
        answer3: 'Yavin IV',
        answer4: 'Alderaan',
        correct: 'answer4',
        image: 'tarkin.png'
    },
    {
        number: 4,
        question: 'Which planet does Chewbacca come from?',
        answer1: 'Kashyyyk',
        answer2: 'Crait',
        answer3: 'Wookiee',
        answer4: 'Shyriiwook',
        correct: 'answer1',
        image: 'chewy.png'
    },
    {
        number: 5,
        question: 'What did the Ewoks do with captured Stormtroopers after the battle of Endor?',
        answer1: 'They were tried before the Ewok High Council and executed.',
        answer2: 'They used them to trade with the Empire for Rebel prisoners of war.',
        answer3: 'They disarmed and released them with the stipulation that they would never return to Endor.',
        answer4: 'They ate them and made musical instruments from their armor.',
        correct: 'answer4',
        image: 'ewoks.png'
    },
    {
        number: 6,
        question: 'Darth Vader had as his home base a castle on the planet of Mustafar. What natural features dominated this planet?',
        answer1: 'Volcanoes',
        answer2: 'Forests',
        answer3: 'Ice Fields',
        answer4: 'Beaches',
        correct: 'answer1',
        image: 'vader.png'
    },
    {
        number: 7,
        question: 'Lightsabers come in multiple different colors across the Star Wars mythos. What gives them their different colors?',
        answer1: 'The color of the crystal that powers them.',
        answer2: 'The influence of the Force, depending on which side the user practices.',
        answer3: 'Personal preference when being constructed.',
        answer4: 'The stability of the crystals that power them.',
        correct: 'answer1',
        image: 'maul.png'
    },
    {
        number: 8,
        question: 'Commander of the Droid Army during the Separatist War, General Grievous was a cyborg who was skilled with lightsabers. Why was this?',
        answer1: 'Before being transformed into a cyborg following an explosion on his ship, he was a Sith Lord trained in lightsaber combat and the ways of the Dark Side.',
        answer2: 'He was apprentice to Sith Lord Darth Tyranus.',
        answer3: 'He was trained in lightsaber combat by Count Dooku, despite the fact that he was not force sensitive.',
        answer4: 'He trained himself in the usage of lightsabers after taking one off a jedi he had killed.',
        correct: 'answer3',
        image: 'grievous.png'
    },
    {
        number: 9,
        question: 'Who originally built C-3PO, the gold protocol droid who has appeared in each Star Wars film?',
        answer1: 'Princess Leia',
        answer2: 'Luke Skywalker',
        answer3: 'Qui-Gon Jinn',
        answer4: 'Darth Vader',
        correct: 'answer4',
        image: '3po.png'
    },
    {
        number: 10,
        question: 'Kylo Ren is the son of Leia Organa, and the nephew of Luke Skywalker. Why then was he pulled to the Dark Side of the force?',
        answer1: 'He learned early on that Darth Vader was his grandfather, and sought out he Dark Side to grow his power.',
        answer2: 'He sought refuge in the Dark Side after being betrayed by Luke Skywalker, who he associated with the Light Side of the Force.',
        answer3: 'He was targeted and seduced to the Dark Side by Supreme Leader Snoke starting while still in Leia\'s womb.',
        answer4: 'After being trained as a Jedi, Kylo set out to learn the power of the Dark Side in hopes of becoming as powerful as his idol, Darth Vader.',
        correct: 'answer3',
        image: 'kylo.png'
    },
]

const answers= [
    'Found in the blood of all living creatures, they are microscopic creatures that connect users to the Force.',
    'Jango Fett',
    'Alderaan',
    'Kashyyyk',
    'They ate them and made musical instruments from their armor.',
    'Volcanoes',
    'The color of the crystal that powers them.',
    'He was trained in lightsaber combat by Count Dooku, despite the fact that he was not force sensitive.',
    'Darth Vader',
    'He was targeted and seduced to the Dark Side by Supreme Leader Snoke starting while still in Leia\'s womb.'
]

function startQuiz() {
    $('.js-start-button').click(function(event) { 
        $('.star-destroyer').remove();
        renderQuestion();
    });
}

let currentQuestion = 0;
let currentScore = 0;
let numberWrong = 0;

function renderQuestion() {
    $('body').css('background-image', 'url(img/'+questions[currentQuestion].image+')')
    $('.js-q-and-a').html('');
    $('.js-q-and-a').html(`
    <div class='js-current-question current-question'>
        <h1 class='js-question-box question-box'>${questions[currentQuestion].question}</h1>
        <div class='js-answer-choices answer-choices'>
            <form>
                <fieldset>
                    <label class='js-possible-answer possible-answer'>
                        <div class='js-answer-container answer-container'>
                            <input class='js-answer answer' id='first=input' type='radio' role='radiobutton' name='answer' alt='answer1' checked />
                        </div>
                            <span class='js-answer-description answer-description'>${questions[currentQuestion].answer1}
                            </span>
                    </label>
                    <label class='js-possible-answer possible-answer'>
                        <div class='js-answer-container answer-container'>
                            <input class='js-answer answer' type='radio' role='radiobutton' name='answer' alt='answer2' />
                        </div>
                            <span class='js-answer-description answer-description'>${questions[currentQuestion].answer2}
                            </span>
                    </label>
                    <label class='js-possible-answer possible-answer'>
                        <div class='js-answer-container answer-container'>
                            <input class='js-answer answer' type='radio' role='radiobutton' name='answer' alt='answer3' />
                        </div>
                            <span class='js-answer-description answer-description'>${questions[currentQuestion].answer3}
                            </span>
                    </label>
                    <label class='js-possible-answer possible-answer'>
                        <div class='js-answer-container answer-container'>
                            <input class='js-answer answer' type='radio' role='radiobutton' name='answer' alt='answer4' />
                        </div>
                        <span class='js-answer-description answer-description'>${questions[currentQuestion].answer4}
                        </span>
                    </label>
                </fieldset>
                <div class='button-box'>
                    <button class='js-question-submit question-submit' role='button'>Submit</button>
                </div>
            </form>
        </div>
    </div>`
    )
    renderQuestionNumber();
    renderScore();
};

function checkAnswer(answer) {
    let checkedAnswer = $('input:checked').attr('alt');
    let rightAnswer = questions[currentQuestion].correct;
    let answerFlag = false;
    if( checkedAnswer === rightAnswer ) {
        answerFlag = true;
    }
    return answerFlag;
}

function handleSubmit() {
    $('.js-container').on('click', '.js-question-submit', function(event) {
        event.preventDefault();

        const answer = $('input:checked');

        const userCorrect = checkAnswer(answer);
        if(userCorrect === true) {
            correctAnswer();
        }
        else {
            incorrectAnswer();
        }
    });
}

function correctAnswer() {
    $('h1').text('Correct! Master Yoda would be proud.').addClass('green');
    $('fieldset').prop('disabled', true);
    iterateQuestion();
    iterateScore();
    nextButton();
}

function nextButton() {
    $('button').text('Next Question');
    $('button').removeClass('js-question-submit question-submit').addClass('js-next-question next-question').on('click', function(event) {
        event.preventDefault();
        if(currentQuestion < 10) {
            clearBackground();
            renderQuestion();
        }
        else {
            finalPage();
        }
    })
}

function incorrectAnswer() {
    $('h1').text(`Incorrect! You disappoint the Emperor. The correct answer is: \"${answers[currentQuestion]}\"`).addClass('red');
    $('fieldset').prop('disabled', true)
    iterateWrong();
    iterateQuestion();
    nextButton();
}

function renderScore() {
    let yourScore = Math.floor(currentScore / currentQuestion * 100) || 0;
    $('.js-score').html(`<h2>Your Score: <span class='js-foo foo'>${yourScore}%</span> - <span class='correct green'>${currentScore} correct</span>, <span class='incorrect red'>${numberWrong} incorrect</span></h2>`)
    if(currentScore / currentQuestion < .7 && questions[currentQuestion].number > 1) {
        $('.js-foo').addClass('red');
    }
    else {  
        $('.js-foo').addClass('green')
    }
}

function finalPage() {
        $('.js-q-and-a').html('')
        $('h2').html('')
        let finalScore = Math.floor(currentScore / currentQuestion * 100)
        if(currentScore / currentQuestion < .7) {
            $('body').css('background-image', 'url(img/palpatine.png)')
            $('.js-q-and-a').addClass('red')
            $('.js-q-and-a').html(`
            <h1>Master Kenobi, I am disappointed. Surely you can do better.
            <br><br>
            Final Score: ${currentScore} out of 10<br><br>${finalScore}%</h1>
            <br><br>
            <button class='restart-quiz'>Retake the Quiz</button>
            `)
        }
        else {
            $('body').css('background-image', 'url(img/yoda.png)')
            $('.js-q-and-a').addClass('green')
            $('.js-q-and-a').html(`
            <h1>The Force is strong with you!
            <br><br>
            Final Score: ${currentScore} out of 10<br><br>${finalScore}%</h1>
            <br><br>
            <button class='restart-quiz'>Retake the Quiz</button>
            `)
        }
}

function renderQuestionNumber() {
    $('.js-question-number').html(`
    <h2>Question Number ${questions[currentQuestion].number} of 10</h2>
    `)
}

function retakeQuiz() {
    $('.js-container').on('click', '.restart-quiz', function(event) {
        event.preventDefault();

        currentQuestion = 0;
        currentScore = 0;
        numberWrong = 0;

        $('body').css('background-image', '');
        renderQuestion();
        $('.js-q-and-a').removeClass('red');
        $('.js-q-and-a').removeClass('green')
    })
}

function clearBackground() {
    const clearBack = $('body').css('background-image', '');
    return clearBack;
}

function iterateQuestion() {
    currentQuestion++;
}

function iterateScore() {
    currentScore++;
}

function iterateWrong() {
    numberWrong++;
}

function handleButtons() {
    startQuiz();
    handleSubmit();
    retakeQuiz();
}

handleButtons();