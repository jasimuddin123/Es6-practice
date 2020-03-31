
class Parent{
    constructor(){
        this.fatherName = "Abdur Rashaid"; 

    }

}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;


    
    }

    getFullName(){
       return this.name + " " + this.fatherName
    }
}

const baby = new Child("jasim uddin");
const baby2 = new Child(" Nasir Uddin");

console.log(baby.getFullName());
console.log(baby2);
