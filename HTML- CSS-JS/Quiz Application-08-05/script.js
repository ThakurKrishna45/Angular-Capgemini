
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },

    {
        question: "Which planet is called Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },

    {
        question: "Who invented Java?",
        options: ["James Gosling", "Dennis Ritchie", "Elon Musk", "Bill Gates"],
        correctAnswer: "James Gosling"
    },

    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Which is the largest ocean?",
        options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    }
];


let currentQuestion = 0;
let userAnswers = [];
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const quizSection = document.querySelector(".quiz-section");
const resultsSection = document.querySelector(".results-section");

const scoreText = document.getElementById("score");
const percentageText = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");

const answerReview = document.querySelector(".answer-review");
const progressBar = document.querySelector(".progress-bar");


function startQuiz() {

    currentQuestion = 0;
    userAnswers = [];
    score = 0;

    displayQuestion(currentQuestion);
    updateProgressBar();
}


function displayQuestion(questionIndex) {

    const currentQuiz = questions[questionIndex];

    questionNumber.innerText =
        `Question ${questionIndex + 1} of ${questions.length}`;

    questionText.innerText = currentQuiz.question;

    optionButtons.forEach((button, index) => {

        button.innerText =
            `${currentQuiz.options[index]}`;

        button.classList.remove("active");

        if (userAnswers[questionIndex] === currentQuiz.options[index]) {
            button.classList.add("active");
        }

        button.onclick = function () {
            selectAnswer(questionIndex, currentQuiz.options[index]);
        };
    });

    
    prevBtn.disabled = questionIndex === 0;

    
    if (questionIndex === questions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.hidden = false;
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.hidden = true;
    }
}


function selectAnswer(questionIndex, selectedOption) {

    userAnswers[questionIndex] = selectedOption;

    displayQuestion(questionIndex);

    updateProgressBar();
}

function nextQuestion() {

    if (!userAnswers[currentQuestion]) {
        alert("Please select an answer.");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    }
}


function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
}

function checkAnswer(userAnswer, correctAnswer) {

    return userAnswer === correctAnswer;
}


function calculateScore() {

    score = 0;

    for (let i = 0; i < questions.length; i++) {

        if (checkAnswer(userAnswers[i], questions[i].correctAnswer)) {
            score++;
        }
    }

    let percentage = (score / questions.length) * 100;

    return {
        score: score,
        percentage: percentage
    };
}


function displayResults() {

    const result = calculateScore();

    quizSection.style.display = "none";
    resultsSection.hidden = false;

    scoreText.innerText =
        `${result.score} / ${questions.length}`;

    percentageText.innerText =
        `${result.percentage}%`;


    if (result.percentage >= 60) {
        resultMessage.innerText = "You Passed!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerText = "You Failed!";
        resultMessage.style.color = "red";
    }

    answerReview.innerHTML = "<h3>Answer Review</h3>";

    for (let i = 0; i < questions.length; i++) {

        let reviewDiv = document.createElement("div");

        reviewDiv.classList.add("review-item");

        let isCorrect = checkAnswer(
            userAnswers[i],
            questions[i].correctAnswer
        );

        reviewDiv.innerHTML = `
            <p><strong>Question:</strong> ${questions[i].question}</p>

            <p><strong>Your Answer:</strong> ${userAnswers[i]}</p>

            <p><strong>Correct Answer:</strong> ${questions[i].correctAnswer}</p>

            <p class="${isCorrect ? 'correct' : 'wrong'}">
                ${isCorrect ? 'Correct' : 'Wrong'}
            </p>
        `;

        answerReview.appendChild(reviewDiv);
    }

    progressBar.style.width = "100%";
    progressBar.style.backgroundColor = "blue";
}


function updateProgressBar() {

    let answeredQuestions = 0;

    for (let i = 0; i < userAnswers.length; i++) {

        if (userAnswers[i]) {
            answeredQuestions++;
        }
    }

    let progress =
        (answeredQuestions / questions.length) * 100;

    progressBar.style.width = progress + "%";
}

function restartQuiz() {

    resultsSection.hidden = true;
    quizSection.style.display = "block";

    startQuiz();
}


nextBtn.addEventListener("click", nextQuestion);

prevBtn.addEventListener("click", previousQuestion);

submitBtn.addEventListener("click", displayResults);

document
    .getElementById("restart-btn")
    .addEventListener("click", restartQuiz);


startQuiz();