const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#btn-choices"));
const countText = document.querySelector(".progress-text");
const progresFull = document.querySelector(".progress-full");

let currentQuestion = {};
let availableQuestions = [];
let countQuestion = 0;
let correctAnswer = 0;

let MAX_QUESTIONS = 3;

let questions = [
  {
    question: "Quanto é 2 + 2?",
    choice1: "3",
    choice2: "7",
    choice3: "4",
    choice4: "5",
    answer: 3,
  },
  {
    question: "Qual linguagem de programação voce esta aprendendo??",
    choice1: "Java",
    choice2: "JavaScript",
    choice3: "Ruby",
    choice4: "PHP",
    answer: 2,
  },
  {
    question: "Qual framework é Javascript?",
    choice1: "Django",
    choice2: "Spring Boot",
    choice3: "React",
    choice4: "Laravel",
    answer: 3,
  },
];

nextQuestion = () => {
  if (availableQuestions.length === 0 || countQuestion > MAX_QUESTIONS) {
    localStorage.setItem("recentScore", correctAnswer);
    return window.location.assign("/end.html");
  }

  countText.innerText = `${countQuestion}/3`;
  progresFull.style.width = `${countQuestion / MAX_QUESTIONS}` * 100 + "%";

  const indexQuestion = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[indexQuestion];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion[`choice${number}`];
  });

  availableQuestions.splice(indexQuestion, 1);
};

selectedChoice = (event) => {
  event.preventDefault();
  countQuestion++;
  const answerTargetNumber = event.target.dataset.number;
  if (answerTargetNumber == currentQuestion.answer) {
    correctAnswer++;
  }
  nextQuestion();
};

choices.forEach((choice) => {
  choice.addEventListener("click", selectedChoice);
});

startGame = () => {
  countQuestion++;
  availableQuestions = [...questions];
  nextQuestion();
};

startGame();
