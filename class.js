class Students{
      constructor(sId,sName){
            this.id = sId;
            this.name = sName; 
            this.school = 'Daffodil international university'
      }

}
const student = new Students(12,'shukumar');
const student2 = new  Students(11, 'shifat');

console.log(student, student2);