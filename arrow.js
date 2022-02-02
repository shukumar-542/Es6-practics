// function doubleIt(num){
//       return num * 2;

// }

const doubleIt = num => num * 2;

let total = doubleIt(10);
console.log(total);

const add = (x=5 , y=5)=> x + y;

let sum = add(10,20);
console.log(sum);

const doMath = (x,y) =>{
      const add = x + y;
      const mul = x * y;
      const total = add + mul;
      return total;
}

const total2 = doMath(5,10);
console.log(total2);