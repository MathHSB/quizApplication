const highScore = JSON.parse(localStorage.getItem("HighScore")) || [];
const formatScore = document.querySelector(".formatHighScore");

const sortScore = highScore.sort((a, b) => b.score - a.score);

const topFive = () => {
  while (sortScore.length >= 6) {
    sortScore.pop();
  }
};

sortScore.forEach((people, index) => {
  topFive();
  formatScore.innerHTML += `
    <li> ${index + 1}° - ${people.name}: ${people.score} Acertos</li>`;
});
