const finalScore = document.querySelector(".score");
const btnSave = document.querySelector("#btnSave");
const inputScore = document.querySelector(".inputScore");
const sucessSave = document.querySelector(".sucessSave");

const highScore = JSON.parse(localStorage.getItem("HighScore")) || [];
const recentScore = localStorage.getItem("recentScore");

finalScore.innerText = recentScore;

const saveScore = () => {
  if (
    inputScore.value === null ||
    inputScore.value === undefined ||
    inputScore.value === ""
  ) {
    alert("Digite, um nome válido");
  } else {
    highScore.push({
      name: inputScore.value,
      score: recentScore,
    });
    localStorage.setItem("HighScore", JSON.stringify(highScore));

    inputScore.style.display = "none";
    sucessSave.innerText = "Salvo com sucesso!!";
    sucessSave.classList.add("active");
  }
};
btnSave.addEventListener("click", saveScore);
