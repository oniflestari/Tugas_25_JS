var arr1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
string1 = arr1.toString();

var arr2 = arr1.sort();
string2 = arr2.toString();

var arr3 = arr2.reverse();
string3 = arr3.toString();

var filter = arr1.filter(
  function functionFilter(n) {
    return n > 10;
  }
).toString();

console.log('Sebelumnya : ', string1);
console.log('Ascending : ', string2);
console.log('Descending :', string3);
console.log('Filter > 10 : ', filter)