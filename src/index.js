module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = new Set();
  let closingBrackets = new Set();
  let matchingBrackets = {};

  for (let pair of bracketsConfig) {
    openBrackets.add(pair[0]);
    closingBrackets.add(pair[1]);
    matchingBrackets[pair[1]] = pair[0];
  }

  for (let bracket of str) {
    if (openBrackets.has(bracket)) {
      if (closingBrackets.has(bracket) && stack[stack.length - 1] === bracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (closingBrackets.has(bracket)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[bracket]) {
        return false;
      }
    } else {
      return false; // Невідомий символ, який не є дужкою
    }
  }

  return stack.length === 0;
  











  //   let obj = {};
//   let openBrackets = [];
  
//   for (let item of bracketsConfig) {
//     obj[item[1]] = item[0];
//     openBrackets.push(item[0])
//   }

    // for (let i = 0; i < str.length; i++) {
    //     let currentSymbol = str[i];

    //     if (openBrackets.includes(currentSymbol)) {
    //         stack.push(currentSymbol);   
    //     } else {
    //         if (stack.length === 0) {
    //             return false;
    //         }

    //         let topElement = stack[stack.length - 1];

    //         if (obj[currentSymbol] === topElement) {
    //             stack.pop();
    //         } else {
    //             return false
    //         }
    //     }
    // }
    
  
}

