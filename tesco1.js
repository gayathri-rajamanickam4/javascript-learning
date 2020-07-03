var x = 10;
function y() {
    function z() {
        console.log("x::", x); // error out saying x is not defined
    }

    z();
    const x = 20; // error out saying x is not defined
}

y();
