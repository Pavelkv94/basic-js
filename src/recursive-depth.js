const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //если массив плоский то результат 1
    let result = 1;
    //обратимся к каждому элементу массива
    arr.forEach((element) => {
      let depth = 1;
      if (Array.isArray(element)) {
        depth += this.calculateDepth(element);
      }
      result = Math.max(result, depth);
    });
    return result;
  }
};
