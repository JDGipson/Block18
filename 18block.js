const { array } = require("yargs");

const calc = {
  multi: function multiply(a, b) {
    return a * b;
  },

  // a = array
  // b = array
  //  loop through both arrays
  //  return only odd numbers from both arrays(use % 1)
  // create new array from smallest to biggest

  odds: (a, b) => {
    let finalArray = [];
    for (let i = 0; i < a.length; i++) {
      let currNum = a[i];
      if (currNum % 2 !== 0) {
        finalArray.unshift(currNum);
      }
    }
    for (let o = 0; o < b.length; o++) {
      let currBNum = b[o];
      if (currBNum % 2 !== 0) {
        finalArray.unshift(currBNum);
      }
    }
    finalArray.sort((a, b) => {
      return a - b;
    });
    return finalArray;
  },
};
console.log(calc.odds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));

module.exports = calc;
