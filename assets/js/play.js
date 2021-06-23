const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#btn-choices"));
const countText = document.querySelector(".progress-text");
const progresFull = document.querySelector(".progress-full");

let currentQuestion = {};
let countQuestion = 0;
let correctAnswer = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 10;

let questions = [
  {
    question: "Which type of JavaScript language is ___",
    choice1: "Object-Oriented",
    choice2: "Object-Based",
    choice3: "Assembly-language",
    choice4: "High-level",
    answer: 2,
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    choice1: "Alternative to if-else",
    choice2: "Switch statement",
    choice3: "f-then-else statement",
    choice4: "immediate if",
    answer: 4,
  },
  {
    question: "In JavaScript, what is a block of statement?",
    choice1: "Conditional block",
    choice2:
      "block that combines a number of statements into a single compound statement",
    choice3: "both conditional block and a single statement",
    choice4: "block that contains a single statement",
    answer: 2,
  },
  {
    question: "HTML stands for -?",
    choice1: "HighText Machine Language",
    choice2: "HyperText and links Markup Language",
    choice3: "HyperText Markup Language",
    choice4: "None of these",
    answer: 3,
  },
  {
    question: "The correct sequence of HTML tags for starting a webpage is -",
    choice1: "Head, Title, HTML, body",
    choice2: "HTML, Body, Title, Head",
    choice3: "HTML, Head, Title, Body",
    choice4: "HTML, Head, Title, Body",
    answer: 4,
  },
  {
    question:
      "Which of the following element is responsible for making the text bold in HTML?",
    choice1: "<pre>",
    choice2: "<a>",
    choice3: "<b>",
    choice4: "<br>",
    answer: 3,
  },
  {
    question:
      "How to create an unordered list (a list with the list items in bullets) in HTML?",
    choice1: "<ul>",
    choice2: "<ol>",
    choice3: "<li>",
    choice4: "<i>",
    answer: 3,
  },
  {
    question: " CSS stands for -",
    choice1: "Cascade style sheets",
    choice2: "Color and style sheets",
    choice3: "Cascading style sheets",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question:
      "  Which of the following is the correct syntax for referring the external style sheet?",
    choice1: "<style src = example.css>",
    choice2: "<style src = 'example.css' >",
    choice3: "<stylesheet> example.css </stylesheet>",
    choice4: "<link rel='stylesheet' type='text/css' href='example.css'>",
    answer: 4,
  },
  {
    question:
      "  The property in CSS used to change the background color of an element is -",
    choice1: "bgcolor",
    choice2: "color",
    choice3: "background-color",
    choice4: "All of the above",
    answer: 3,
  },
];

startGame = () => {
  countQuestion++;
  availableQuestions = [...questions];
  nextQuestion();
};

nextQuestion = () => {
  if (availableQuestions.length === 0 || countQuestion > MAX_QUESTIONS) {
    localStorage.setItem("recentScore", correctAnswer);
    return window.location.assign("/end.html");
  }

  countText.innerText = `${countQuestion}/10`;
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
startGame();
