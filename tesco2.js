b = "abc";
var a = {
    b: this,
    c: function () {
        console.log(this);
        return this.b;
    }
};

const result = a.c(); //returns this object
console.log("result::", result);
