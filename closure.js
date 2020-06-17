function opeartion() {
    let count = 0;
    return function (operator) {
        switch (operator) {
            case "+":
                return ++count;
            case "-":
                return --count;
            default:
                break;
        }
    };
}

const counter = opeartion();
// let result = counter("+");
// console.log(result);
// result = counter("+");
// console.log(result);
// result = counter("-");
// console.log(result);

function createBase(base) {
    return function (n) {
        return base + n;
    };
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
