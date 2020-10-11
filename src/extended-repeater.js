const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //значения по умолчанию
  if (options.separator === undefined ) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
//если есть все числовые свойства обьекта
  if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
    str += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;;
  }
//если есть число повторений строки
  if (options.repeatTimes !== undefined) {
    str = (str+options.separator).repeat(options.repeatTimes - 1) + str;
    return str;
  }
  //если нет числовых свойств обьекта
  else {
    return str+options.addition;
  }
};
  