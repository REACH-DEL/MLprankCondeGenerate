const heroes = [
  "miya",
  "balmond",
  "saber",
  "alice",
  "nana",
  "tigreal",
  "alucard",
  "karina",
  "akai",
  "franco",
  "bane",
  "bruno",
  "clint",
  "rafaela",
  "eudora",
  "zilong",
  "fanny",
  "layla",
  "minotaur",
  "lolita",
  "hayabusa",
  "freya",
  "gord",
  "natalia",
  "kagura",
  "chou",
  "sun",
  "alpha",
  "ruby",
  "yi sun-shin",
  "moskov",
  "johnson",
  "cyclops",
  "estes",
  "hilda",
  "aurora",
  "lapu-lapu",
  "vexana",
  "roger",
  "karrie",
  "gatotkaca",
  "harley",
  "irithel",
  "grock",
  "argus",
  "odette",
  "lancelot",
  "diggie",
  "hylos",
  "zhask",
  "helcurt",
  "pharsa",
  "lesley",
  "jawhead",
  "angela",
  "gusion",
  "valir",
  "martis",
  "uranus",
  "hanabi",
  "chang's",
  "kaja",
  "selena",
  "aldous",
  "claude",
  "vale",
  "leomord",
  "lunox",
  "hanzo",
  "belerick",
  "kimmy",
  "thamuz",
  "harith",
  "minsitthar",
  "kadita",
  "faramis",
  "badang",
  "khufra",
  "granger",
  "guinevere",
  "esmeralda",
  "terizla",
  "x.borg",
  "dyrroth",
  "lylia",
  "baxia",
  "masha",
  "wanwan",
  "silvanna",
  "cecilion",
  "carmilla",
  "atlas",
  "popol and kupa",
  "yu zhong",
  "luo yi",
  "benedetta",
  "khaleed",
  "barats",
  "brody",
  "mathilda",
  "paquito",
  "gloo",
  "beatrix",
  "phoveuse",
  "natan",
  "aulus",
  "aamon",
  "valentina",
  "edith",
  "floryn",
  "yin",
  "melissa",
  "xavier",
  "julian",
  "fredrinn",
  "joy",
  "novaria",
  "arlott",
  "ixia",
  "nolan",
  "cici",
  "chip",
];

const button = document.getElementById("button");

document.addEventListener("DOMContentLoaded", function () {
  const buttonSwitch = document.getElementById("switch-button");
  const h1 = "Winrate Matches Generate";
  const h2 = "Top and Mmr Generate";
  const Label1p1 = "Enter number of Top:";
  const Label1p2 = "Enter Total matches:";
  const Label2p1 = "Enter MMR:";
  const Label2p2 = "Enter Won matches:";

  buttonSwitch.addEventListener("change", function () {
    const headText = document.querySelector(".headText");
    const backText = document.querySelector(".backText");
    const label2 = document.querySelector(".label2");
    const label3 = document.querySelector(".label3");

    if (buttonSwitch.checked) {
      headText.textContent = h2;
      backText.textContent = h1;
      label2.textContent = Label1p1;
      label3.textContent = Label2p1;
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const heroInput = document.getElementById("hero");
        const totalInput = document.getElementById("total");
        const wonInput = document.getElementById("won");
        const output = document.getElementById("output");
        const heroName = heroInput.value.toLowerCase();
        const top = parseInt(totalInput.value);
        const mmr = parseInt(wonInput.value);

        let code = "";
        for (let i = 0; i < heroes.length; i++) {
          if (heroName === heroes[i]) {
            const nameHero = heroes[i];
            const orderHero = i + 1;
            code =
              "Your code: 3/Global No." +
              top +
              " " +
              nameHero +
              "/" +
              mmr +
              "/206/" +
              orderHero;
            break; // Exit loop once hero is found
          } else {
            code = "Invalid Hero Name!!!";
          }
        }

        output.innerHTML = code;
        if (code === "Invalid Hero Name!!!") {
          output.classList.add("harm");
        } else {
          output.classList.remove("harm");
        }
      });
    } else {
      headText.textContent = h1;
      backText.textContent = h2;
      label2.textContent = Label1p2;
      label3.textContent = Label2p2;
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const heroInput = document.getElementById("hero");
        const totalInput = document.getElementById("total");
        const wonInput = document.getElementById("won");
        const output = document.getElementById("output");
        const heroName = heroInput.value.toLowerCase();
        const totalMatches = parseInt(totalInput.value);
        const wonMatches = parseInt(wonInput.value);

        let code = "";
        for (let i = 0; i < heroes.length; i++) {
          if (heroName === heroes[i]) {
            const orderHero = i + 1;
            code =
              "Your code: 5/" +
              wonMatches +
              "/" +
              totalMatches +
              "//" +
              orderHero;
            break; // Exit loop once hero is found
          } else {
            code = "Invalid Hero Name!!!";
          }
        }

        output.innerHTML = code;
        if (code === "Invalid Hero Name!!!") {
          output.classList.add("harm");
        } else {
          output.classList.remove("harm");
        }
      });
    }
  });
});
