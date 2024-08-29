function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  let size = 30;
  const newBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
    size += 10;
  }

  boxes.append(...newBoxes);

  return newBoxes;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const input = document.querySelector("input");
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

document.querySelector("[data-destroy]").addEventListener("click", function () {
  destroyBoxes();
});
