//
// www.youtube.com/@BinaryMinutes
//

// Default Parameters and undefined

function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet();
greet(undefined);
greet(null);
greet('World');
