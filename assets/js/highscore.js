//Transforma a string JSON do Local Storage em um arquivo manipulável JavaScript.
const highScore = JSON.parse(localStorage.getItem("HighScore")) || [];

const formatScore = document.querySelector(".formatHighScore");

//Ordena a pontuação do quiz do maior pontuador para o menor pontuador.
const sortScore = highScore.sort((a, b) => b.score - a.score);

//remove os pontuadores a partir da 6 colocação, formando assim o top 5.
const topFive = () => {
  while (sortScore.length >= 6) {
    sortScore.pop();
  }
};

//Adiciona o top 5 a página de pontuação.
sortScore.forEach((people, index) => {
  topFive();
  formatScore.innerHTML += `
    <li> ${index + 1}° - ${people.name}: ${people.score} Acertos</li>`;
});
