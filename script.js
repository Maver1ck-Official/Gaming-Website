const GAMES = [
  { name: "Kerry's Mod", url: "https://kerrys-mod.vercel.app" },
  { name: "Folk Valley", url: "https://folk-valley.netlify.app" },
  { name: "Gem Odyssey", url: "https://gem-odyssey.base44.app" },
  { name: "Neon Dash", url: "https://base44neondash.base44.app" },
  { name: "Skibidi Strike Zone", url: "https://skibidi-strike-zone.base44.app" },
  { name: "Elmo Snipe Pro", url: "https://elmo-snipe-pro.base44.app" },
  { name: "Redwolf Coil", url: "https://-redwolf-coil-.base44.app" },
  { name: "Inconvenienced", url: "https://-inconvenienced-.base44.app" },
  { name: "Dark Dash Dread", url: "https://dark-dash-dread.base44.app" },
  { name: "Dodge Neon Pulse", url: "https://dodge-neon-pulse.base44.app" },
  { name: "Infinite Feline Front", url: "https://infinite-feline-front.base44.app" },
  { name: "CodePen Game", url: "https://codepen.io/Oliver-Rayno/pen/jEVvZjB" },
  { name: "The Pizza Edition", url: "https://the-pizza-edition.vercel.app" }
];

const grid = document.getElementById("games-grid");

GAMES.forEach(({ name, url }) => {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";

  const title = document.createElement("span");
  title.className = "game-name";
  title.textContent = name;

  const play = document.createElement("span");
  play.className = "game-play";
  play.textContent = "Play \u2192";

  card.append(title, play);
  grid.appendChild(card);
});

const front = document.getElementById("front");
const games = document.getElementById("games");

document.getElementById("logo-btn").addEventListener("click", () => {
  front.classList.add("hidden");
  games.classList.remove("hidden");
  document.title = "Game Zone";
  window.scrollTo(0, 0);
});

document.getElementById("back-btn").addEventListener("click", () => {
  games.classList.add("hidden");
  front.classList.remove("hidden");
  document.title = "Google";
});
