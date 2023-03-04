function Hello(){ //created a function with no parameters, named as Hello()
    console.log("Hello Shruthi");
}

//function call from main program
Hello(); //"Hello Shruthi"

function Add(num1, num2){ //created a function with two parameters, named as Add()
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
}
Add(3, 4); // Sum of 3 and 4 is 7

arrow = () =>{
    console.log("Hello, I am an arrow function..");
}
arrow(); //Hello, I am an arrow function..

// var x = 21; //global
//         var girl = function () { //girl(function)
//             console.log(x); //consoling variable brfore declaration throws error undefined
//             var x = 20;
//         };
//         girl (); //undefined
//question 5 follows

        var x = 21;
        girl ();
        console.log(x)
        function girl() {
            console.log(x);
            var x = 20;
        };
//question 6 follows
        var x = 21;
        a(); //20
        b(); //40
        
            function a() {
            
            x = 20;
            console.log(x);
        };
            function b() {
            
            x = 40;
            console.log(x);
        };
//question 7 follows

Factorial=(n)=>{
    let factorial=1;
 for(let i=1; i<=n; i++)
 {
    factorial*= i;
 }
 return factorial;
}
console.log(Factorial(10));