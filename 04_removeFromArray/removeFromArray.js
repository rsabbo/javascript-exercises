/*const removeFromArray = function (array, item) {
  //use indexOf to find the index number of the item I want to remove
  const index = array.indexOf(item);
  //use the splice to remove the item
  array.splice(index, 1);

  return array;
};

removeFromArray([1, 2, 3, 4], 3);*/

/*const removeFromArray = function (array, item1, item2) {
  const index1 = array.indexOf(item1); //gives me 2
  const index2 = array.indexOf(item2); //gives me 1

  array.splice(index2, index1); //here we say it should removed from the position 1 and should remove 2 items.

  return array; //gives me 2
};

removeFromArray([1, 2, 3, 4], 3, 2);*/

/*const removeFromArray = function (array, item1, item2) {
  array.includes(item1);
  array.includes(item2);

  return array;
};

removeFromArray([1, 2, 3, 4], 7, "tacos");*/

const removeFromArray = function (array, ...item) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!item.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
