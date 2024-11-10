// Напишите функцию, которая принимает число n и возвращает n чаще всего встречающихся элементов в массиве

const arr1 = [0,0,1,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getPopularItems = (arr, n) => {
 const Topmap = new Map();

 arr.forEach(element => {
    
    Topmap.set(element, (Topmap.get(element)|| 0 ) +1);
 });

 const topArr = Array.from(Topmap.entries());

 topArr.sort((a,b) => b[1] - a[1])

 const res = topArr.slice(0,n).map(entry => entry[0])

 return res;
}

console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']
