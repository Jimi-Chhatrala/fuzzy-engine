//
// www.youtube.com/@BinaryMinutes
//

// Calculate the factorial of a number
// and return the calculation steps

function factorial(n, steps = []) {
  if (n === 1) {
    steps.push('1');
    return { result: 1, steps };
  }
  steps.push(n.toString());
  const { result, steps: updatedSteps } 
                  = factorial(n - 1, steps);
  return { result: n * result, steps: updatedSteps };
}

const { result, steps } = factorial(5);
console.log('Factorial of 5:', 
          `${steps.join(' x ')} = ${result}`);
