const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  //-------IDU

  let result = [];
  if(!Array.isArray(arr)) throw new Error;
  if(arr.length == 1) return arr;

  for (let i = 0; i < arr.length; i++) {
      if(arr[i] == '--discard-prev' && arr[i - 2] != '--discard-next'){
          result.pop();
          continue;
      }

      else if (arr[i] == '--discard-next') {
          i++;
          continue;
      }

      else if(arr[i]==='--double-prev' && arr[i - 2] !== '--discard-next'){
          if (arr[i-1] !== undefined) result.push(arr[i - 1]);
          i++;
      }

      else if(arr[i] == '--double-next') {
          if (arr[i+1] !== undefined) result.push(arr[i + 1]);
          i++;
      }

      if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev' && arr[i] !== undefined) result.push(arr[i]);

  }
  
  return result;
};
