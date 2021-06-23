const question = document.querySelector("#question");

// Transforma a NodeList em uma Array para uso dos métodos nativos de uma array.
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

//Inicia o quiz incrementando uma unidade ao contador e copiando o array de questões para manipulação na sequencia.
startGame = () => {
  countQuestion++;
  availableQuestions = [...questions];
  nextQuestion();
};

nextQuestion = () => {
  // Verifica se o array de questões atuais esta vazia ou se o contador é maior que o número de questões, se um deles for verdadeiro, acrecenta o score atual ao Local Storage e direciona a pagina final do quiz.
  if (availableQuestions.length === 0 || countQuestion > MAX_QUESTIONS) {
    localStorage.setItem("recentScore", correctAnswer);
    return window.location.assign("/end.html");
  }

  // alterna valor do contador e aumenta barra de questões a cada próxima questão.
  countText.innerText = `${countQuestion}/10`;
  progresFull.style.width = `${countQuestion / MAX_QUESTIONS}` * 100 + "%";

  // referencia a questão atual a uma das questões que restam na array de questões disponiveis com o uso de um index aletorio que é formado de acordo com o tamanho da array de questões atual.
  const indexQuestion = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[indexQuestion];
  question.innerText = currentQuestion.question;

  //Uso do dataset para facilitar a referencia em cada alternativa de cada questão.
  choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion[`choice${number}`];
  });

  //remoção da questão atual para nao se repetir ao longo do quiz
  availableQuestions.splice(indexQuestion, 1);
};

//Previne padrão de click a cada escolha de alternativa, incrementa ao contador, verifica se a resposta é a certa e chama a proxima questão.
selectedChoice = (event) => {
  event.preventDefault();
  countQuestion++;
  const answerTargetNumber = event.target.dataset.number;
  if (answerTargetNumber == currentQuestion.answer) {
    correctAnswer++;
  }
  nextQuestion();
};

//Evento de click em cada alternativa.
choices.forEach((choice) => {
  choice.addEventListener("click", selectedChoice);
});
startGame();
