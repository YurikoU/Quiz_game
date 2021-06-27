// Declare quizzes and answers
const quizzes = [
    {
        question: 'A person with well-developed abdominal muscles is said to have a what?',
        answers: [
            'One-pack',
            'Six-pack',
            '12-pack',
            'Family-pack'
        ],
        correct: 'Six-pack'
    }, {
        question: 'Which two words traditionally appear onscreen at the termination of a feature film?',
        answers: [
            'The End',
            'The Conclusion',
            'The Finish',
            'The Pizza Rolls Are Done'
        ],
        correct: 'The End'
    }, {
        question: 'A magnet would most likely attract which of the following?',
        answers: [
            'Metal',
            'Plastic',
            'Wood',
            'The wrong man'
        ],
        correct: 'Metal'
    }, {
        question: 'Which of these names is not in the title of a Shakespeare play?',
        answers: [
            'Hamlet',
            'Romeo',
            'Macbeth',
            'Darren'
        ],
        correct: 'Darren'
    }, {
        question: 'Where did Scotch whisky originate?',
        answers: [
            'Ireland',
            'Wales',
            'The United States',
            'Scotland'
        ],
        correct: 'Scotland'
    }
];
const quizLength = quizzes.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//Set the quizzes
const setQuizzes = () => {
    const $question = document.getElementById('question');
    let buttonIndex = 0;

    $question.textContent = quizzes[quizIndex].question;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quizzes[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setQuizzes();


//Check if the answer is correct and eventually show the result
const checkAnswer = (e) => {
    //Alert will tell if it's correct.
    if (quizzes[quizIndex].correct === e.target.textContent) {
        window.alert('Correct!!!');
        score++;
    } else {
        window.alert('Seems to be wrong :(');
    }
    
    quizIndex++;
    
    //If there are(is) still quizzes set the next quiz, otherwise, show the result.
    if (quizIndex < quizLength) {
        setQuizzes();
    } else {
        window.alert('Good job!\nYour score: ' + score + '/' + quizLength + ' points');
    }
};


//Make sure that each four button behaves in the same way based on the correct answer.  
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        checkAnswer(e);
    });
    handleIndex++;
}


