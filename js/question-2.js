const loader = document.querySelector(".loader");
const gamesContainer = document.querySelector(".games-container");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function games() {
  const response = await fetch(url);

  const results = await response.json();

  const allGames = results.results;

  for (let i = 0; i < allGames.length; i++) {
    setTimeout(function () {
      loader.innerHTML = "";
      gamesContainer.innerHTML +=
        "<p>" +
        "Name: - " +
        allGames[i].name +
        " Rating: - " +
        allGames[i].rating +
        " Tags: - " +
        allGames[i].tags.length +
        "</p>";
    }, 2000);

    if (i === 7) {
      break;
    }
  }
}
games();
