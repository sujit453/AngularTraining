//var (ES5) , let or const

var uname: string='sujit'; //global scope

function fun1() {
    var uname :string ='sujit'; // Local or Function Scope
    var i=1;
   // while (i<5) {
   //    var flag =true; // Function scoped variable
   //     i++;
   // }
   // console.log(i); // 5
   // console.log(flag); //true

    //Block Lexical Scoped - Llet, const
    while (i<5) {
        let flag =true; // Block scoped variable
        const value = 123;
       //value= 345;
        i++;
    }
    // console.log(flag); 
   //  console.log(value);

}