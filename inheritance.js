
class Parent{
    constructor(){
        this.fatherName = " Abdur Rashaid"; 

    }

}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    
    }
}

const baby = new Child("jasim uddin");
const baby2 = new Child(" Nasir Uddin");

console.log(baby);
console.log(baby2);

// Inheritance with function OOP 

// class Baba{
//     constructor(){
//         this.BabaName = " Abdur Rashaid"; 

//     }

// }

// class Boy extends Baba{
//     constructor(name){
//         super();
//         this.name = name;
//         getFullName(){
//             return this.name + " " + this.fatherName;
//         }
    
//     }
// }

// const bacca= new Boy("jasim uddin");
// const bacca2 = new Boy" Nasir Uddin");

// console.log(bacca.getFullName());
// console.log(bacca2);