const quiz = [
    {
        question: 'What is the most sold game machine in Japan?',
        answers: [
            'Super Famicon',
            'Playstation 2',
            'Nintendo Switch',
            'Nintendo DS'
        ],
        correct: 'Nintendo DS'
    }, {
        question: "Where is the capital of Canada?",
        answers: [
            'Vancouver',
            'Toronto',
            'Ottawa',
            'Montreal'
        ],
        correct: 'Ottawa'
    }, {
        question: 'What is the first name of Lady Gaga?',
        answers: [
            'Stefani',
            'Elizabeth',
            'Alison',
            'Katheryn'
        ],
        correct: 'Stefani'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;





const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;



//クイズの答えを、ボタンに代入する。
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();


//クリックされた要素のテキストが、正解と一致しているか確認。
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('Correct!!');
    } else {
        window.alert('Oh no :(');
    }
    
    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('All quizzes are done! Good job :)');
    }
};

//クリックしたら、4つのボタンいずれも同じ正誤判定をするように、定義。
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}
