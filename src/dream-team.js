const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //проверка типа аргумента
  if (!Array.isArray(members)) {
    return false;
  }
//создаем массив первых букв имен
  let x = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
    x.push(members[i].trim()[0].toUpperCase());}
  }
  //сортируем по алфавиту и возвращаем строкой
  return x.sort().join('');
};