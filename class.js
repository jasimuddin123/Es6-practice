
// Class, Constructor, create objet from class
class Student{
constructor(sId, sName){

    this.id = sId;
    this.name = sName;
    this.school = "Kaonia Shahid Habib Ullah high School";

}

}

const student1 = new Student(22, "JASIM UDDIN");
const student2 = new Student(25, "Kamal Hossain");
const student3 = new Student(30, " Sona Bondu");

console.log(student1, student2, student3);