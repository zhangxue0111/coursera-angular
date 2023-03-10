var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arr = ", arr);

function above5(value) {
  return value > 5;
}

var filteredArr = arr.filter(above5);
console.log("filteredArr = ", filteredArr);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

function search(value) {
  return value.indexOf("Bismol") !== -1;
}

var searchShoppingList = shoppingList.filter(search);
console.log("searchShoppingList = ", searchShoppingList);
