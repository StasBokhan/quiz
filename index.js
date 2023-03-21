const start = document.querySelector(".finish");
const active = document.querySelectorAll(".active");
const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".start");
const output = document.querySelector(".results");
const restart = document.querySelector(".restart");

let answers = [];
let i = 0;
startProgram = () => {
  start.style.display = "none";
  if (i > 9) {
    result.style.display = "inline";
    console.log(answers);
    active[i - 1].classList.add("active");
    return;
  }
  active[i].classList.remove("active");

  if (i > 0) {
    active[i - 1].classList.add("active");
  }

  i++;
};
btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.right) {
      const tr = true;
      answers.push(tr);
    } else {
      const fal = false;
      answers.push(fal);
    }
    startProgram();
  });
});

const countAnswers = () => {
  let count = answers.reduce((accum, el) => {
    if (el == true) {
      accum++;
    }
    return accum;
  });
  output.style.display = "block";
  output.innerHTML = `Правильных ответов : ${count}`;
  i = 0;
  answers = [];
};
result.addEventListener("click", () => {
  result.style.display = "none";
  restart.style.display = "inline";
  countAnswers();
});

restart.addEventListener("click", () => {
  output.style.display = "none";
  restart.style.display = "none";
  startProgram();
});

start.addEventListener("click", startProgram);
