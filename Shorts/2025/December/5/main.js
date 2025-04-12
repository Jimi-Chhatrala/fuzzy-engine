//
// www.youtube.com/@BinaryMinutes
//

// this in Arrow vs. Regular Function

const obj = {
  name: 'Binary Minutes',
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

obj.regular();
obj.arrow();
