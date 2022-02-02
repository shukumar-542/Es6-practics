class parant{
      constructor(){
            this.firstName = 'shukumar';
      }
}
class Child extends parant{
      constructor(name){
            super();
            this.lastName = name

          
      }
      getFullName(){
           return this.firstName +" "+ this.lastName;       
      }
}
const lastName = new Child('ghosh');
console.log(lastName.getFullName());
