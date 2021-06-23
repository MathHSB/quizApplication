const finalScore = document.querySelector(".score");
const btnSave = document.querySelector("#btnSave");
const inputScore = document.querySelector(".inputScore");
const sucessSave = document.querySelector(".sucessSave");

//Transforma a string JSON do Local Storage em um arquivo manipulável JavaScript.
const highScore = JSON.parse(localStorage.getItem("HighScore")) || [];

//Pega o valor da pontuação atual no Local Storage.
const recentScore = localStorage.getItem("recentScore");

//Para verificar se o nome passado no final do quiz é válido.
let clickSave = true;

finalScore.innerText = recentScore;

//Verifica se o nome é valido, se for acresenta nome e score ao Local Storage.
const saveScore = () => {
  if (clickSave) {
    if (
      inputScore.value === null ||
      inputScore.value === undefined ||
      inputScore.value === ""
    ) {
      alert("Digite um nome válido");
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
  }
  clickSave = false;
};
btnSave.addEventListener("click", saveScore);
