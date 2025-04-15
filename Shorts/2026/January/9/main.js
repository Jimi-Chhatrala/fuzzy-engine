//
// www.youtube.com/@BinaryMinutes
//

// Create a deep copy of an object
const originalRecipe = {
  name: 'Pasta',
  ingredients: {
    sauce: 'Tomato',
    spiceLevel: 2,
  },
};

const myRecipe = JSON.parse(JSON.stringify(originalRecipe));

myRecipe.ingredients.spiceLevel = 5;

console.log('Original Recipe\'s Spice Level', originalRecipe.ingredients.spiceLevel);
