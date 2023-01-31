/* MEMO
A higher-order function is a function that either accepts functions as parameters,
returns a function, or both! We call functions that get passed in as parameters
callback functions. Callback functions get invoked during the execution of the
higher-order function.
*/

//  ### ### --- Functions as Data --- ### ###
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below


//  ### ### --- anonymous function (a function without a name) --- ### ###
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

// ### ### --- exercise 1 --- ### ###
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return checkA === checkB ? func(val) : "inconsistent results";
};
console.log(checkConsistentOutput(addTwo, 34))
