//
// www.youtube.com/@BinaryMinutes
//

// Function return Quirks

function test1() {
  return
  {
    message: 'Hello';
  }
}

function test2() {
  return {
    message: 'Hello',
  };
}

console.log(test1());
console.log(test2());
