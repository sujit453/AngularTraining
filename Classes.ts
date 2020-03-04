// function Employee (id,name) {
//     this.id=id;
//     this.name=name;
//     this.getDetails = function() {
//         console.log(id,name);
//     }
// }
// Employee.prototype.getSalary = function() {

// }
// var e = new Employee(1,"abc");

class Person {
   // public name:string;
    // private age:number;

    constructor(protected name:string,protected age:number) {
        this.name=name;
        this.age=age;
    }
    getDetails() {
        console.log("Inside Person");
    }
}

class Employee extends Person {
      constructor(private id:number,private sal:number,public name:string,public age:number) {
               super(name,age);
     }
     getDetails () {
         console.log ("Inside Employee");
     }
}

let emp = new Employee(101,1234,"abc",45);
emp.getDetails();