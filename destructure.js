const person = {
      name:"shukumar", age:25, friends:['jack', 'watson','sharlok'],address:"dhaka", phone:'01767137701',
}
const {address, age } = person;
// const address = person.address;

console.log(address, age);


const newPerson ={
      fname :"shakrlok Homes",
      info : {
            job: "detective",
            friend : "watson",
            address :"england",

      }
}
const { friend } = newPerson.info;
console.log(friend);