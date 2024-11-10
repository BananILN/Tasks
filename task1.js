// Напишите функцию, которая находит уникальный элемент в массиве

const arr1 = [0,0,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getUniqElementMap = (arr) => {
 const LoopMap = new Map();

 arr.forEach(element => {
      LoopMap.set(element,(LoopMap.get(element) || 0 )+ 1 )
 });


 for(const [el , count] of LoopMap){
  if(count === 1) { 
    return el;
  } 
 }
 return null;
}


const GetUniqElementSet= (arr) =>{
  const seen = new Set();
  const duble = new Set();

  arr.forEach(element => {
      if(seen.has(element)){
        duble.add(element);
      }else{
        seen.add(element);
      }
  });

  for(const el of seen){
    if(!duble.has(el)){
      return el;
    }
  }
}







console.log(GetUniqElementSet(arr1)); // 5
console.log(getUniqElementMap(arr2)); // 'sheep'


