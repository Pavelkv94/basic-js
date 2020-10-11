const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //создаем обьект
  let result = {};
  //кол-во ходов в секунду
  let moveInSec = turnsSpeed / (60*60);
  //кол-во ходов для disksNumber (2^x-1)
  let move = 0;
  if (disksNumber === 1) { move = 1; }
  move = Math.pow(2, disksNumber) - 1;
  //кол-во секунд
  let secNumber = Math.floor(move /moveInSec);
  //добавляем свойства в обьект
  result.turns = move;
  result.seconds = secNumber;
  
  return result;
};
