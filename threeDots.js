const ages1  = [20,25,15,21,20];
const ages2 = [25,30,35,30,45];
const ages3 = [60,70,80,75,72];

const allAges = ages1.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages1,...ages2,...ages3]
console.log(allAges2);


const num1 = 450;
const num2 = 650;
const num3 = 540;

const heigestNumber = Math.max(num1,num2,num3);
console.log(heigestNumber);

const arr = [20,50,30,45,10];
const Maximum = Math.max(...arr);
console.log(Maximum);