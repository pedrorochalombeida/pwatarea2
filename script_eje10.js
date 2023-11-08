const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: '¿Cuál es la capital de Francia?',
        answers: [
            { text: 'París', correct: true },
            { text: 'Madrid', correct: false },
            { text: 'Londres', correct: false },
            { text: 'Berlín', correct: false }
        ]
    },
    {
        question: '¿Cuál es el río más largo del mundo?',
        answers: [
            { text: 'Amazonas', correct: true },
            { text: 'Nilo', correct: false },
            { text: 'Misisipi', correct: false },
            { text: 'Yangtsé', correct: false }
        ]
    },
    {
        question: '¿Cuántos planetas hay en nuestro sistema solar?',
        answers: [
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '9', correct: false },
            { text: '10', correct: false }
        ]
    }
];

startGame();

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer.bind(null, answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    scoreDisplay.innerText = `Puntuación: ${score}`;
    showNextButton();
}

function showNextButton() {
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
});

function endGame() {
    questionContainer.innerText = '¡Juego terminado!';
    resetState();
    scoreDisplay.innerText = `Tu puntuación final es: ${score} de ${questions.length}`;
    nextButton.classList.add('hide');
}
