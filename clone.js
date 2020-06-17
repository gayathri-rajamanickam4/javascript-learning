clone = object => {
    if (typeof object !== "object" || object === null) return object;

    let copy;

    if (object instanceof Date) return object;

    if (object instanceof Array) copy = [];
    else copy = {};

    for (let prop in object) {
        let value = object[prop];

        copy[prop] = clone(value);
    }

    return copy;
};

let result = clone([1, 2, "ht"]);
result = clone({a: 1, b: 2, c: {d: 1}});

result = clone({a: 1, b: 2, today: new Date(), testFn: () => {}});
console.log(result);
