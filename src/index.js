import { getRandomOption } from "./modules/getRandomOptions";
import { checkIsWinner } from "./modules/checkIsWinner";
const buttons = [...document.querySelectorAll(".buttons button")];

function start(button) {
  const playerOption = button.classList.item(0);
  const cpuSelection = getRandomOption();
  checkIsWinner(playerOption, cpuSelection);
}

buttons.forEach(button => {
  button.addEventListener("click", () => start(button));
});
