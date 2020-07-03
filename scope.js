// (function () {
//     var a = (b = 5);
// })();

/**
 * var a= (b= 5) will become
 * var a = b;
 * b = 5;
 */
// console.log(b); // 5

// {
//     var a;
//     {
//         a = 10;
//         console.log(a); // 10
//     }
//     console.log(a); //10
// }

// {
//     var a;
//     {
//         var a = 10;
//         console.log(a); // 10
//     }
//     console.log(a); //10
// }

// {
//     {
//         var a = 10;
//         console.log(a); // 10
//     }
//     console.log(a); //10
// }

/**
 * var variables are FUNCTION SCOPED
 * var is not limited to the curly brackets.
 * It is the function which defines the scope.
 */

/** LET */

// {
//     {
//         let a = 10;
//         console.log(a); // 10
//     }
//     console.log(a); //Reference Error: a is not defined
// }

// {
//     let a;
//     {
//         let a = 10;
//         console.log(a); // 10
//     }
//     console.log(a); //undefined
// }

// {
//     let a = 10;
//     {
//         console.log(a); // 10
//     }
//     console.log(a); //10
// }

// {
//     let a = 10;
//     {
//         let a = 20;
//         console.log(a); // 20
//     }
//     console.log(a); //10
// }

function foo() {
    console.log(a); // undefined
    if (true) {
        a();
        function a() {
            console.log(9);
        }
    }
    console.log(a);
}

foo();
