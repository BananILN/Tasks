// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество
const arr = [10, 8, 3, 2, 3, 1, 2, 1, 5, 6, 8, 9, 4, 3, 2, 4, 7, 8, 6, 43, 1];

const getAllSubUniqArr = (arr) => {
  let uniqueSubarraysCount = 0; 

 
  for (let start = 0; start < arr.length; start++) {
    const seen = new Set(); 
    for (let end = start; end < arr.length; end++) {
      const element = arr[end];

     
      if (seen.has(element)) {
        break;
      }

     
      seen.add(element);

     
      uniqueSubarraysCount++;
    }
  }

  return uniqueSubarraysCount; 
};

console.log(getAllSubUniqArr(arr)); // 13





