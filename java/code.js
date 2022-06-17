var myArray = [1, 5, 6, 2, 3];

var min = Math.min(...myArray);
console.log(min)
document.getElementById('min').innerHTML = min;


var max = Math.max(...myArray);
console.log(max);
document.getElementById('max').innerHTML = max;

// check the console for the min and max values of the array