const program = (value) => {
  // Starting sum
  let currentSum = 0;

  // Main logic for the program
  for (let i = 0; i < value; i++) {
    // Computes the constant incremental value of the 2nd number in the equation
    const constant = (i + 1) * 2;

    // Computes the new sum value that will be used on the next iteration
    const newSum = currentSum + constant;

    // Prints the whole equation with the computed values
    console.log(`${currentSum} + ${constant} = ${newSum}`);

    // Replace the old sum value with the new one
    currentSum = newSum;
  }

  // Returns the final sum
  return currentSum;
};

console.log(program(50));
