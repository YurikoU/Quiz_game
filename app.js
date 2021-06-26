const question = 'What is the most sold game machine in Japan?';
const answers = [
    'Super Famicon',
    'Playstation 2',
    'Nintendo Switch',
    'Nintendo DS'
];
const correct = 'Nintendo DS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;



//クイズの答えを、ボタンに代入する。
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();


//クリックされた要素のテキストが、正解と一致しているか確認。
const clickHandler = (e) => {
    if (correct === e.target.textContent) {
        window.alert('Correct!!');
    } else {
        window.alert('Try again :(');
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
