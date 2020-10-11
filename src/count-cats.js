const CustomError = require("../extensions/custom-error");

module.exports = function countCats(Cats) {
    let result = 0;
  //котики во всех массивах
  for (x = 0; x < Cats.length; x++) {
      //котики в одном массиве   
      for (i = 0; i < Cats[x].length; i++) {
          if (Cats[x][i] === '^^') { result += 1 }
          else { continue; }
      }
  } if(result === 0) {return 0} return result;
}

