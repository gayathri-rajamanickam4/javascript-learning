"use strict";

const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

// process.stdin.on("data", inputStdin => {
//     console.log("inputStdin::", inputStdin);
//     inputString += inputStdin;
// });

// process.stdin.on("end", _ => {
//     inputString = inputString
//         .replace(/\s*$/, "")
//         .split("\n")
//         .map(str => str.replace(/\s*$/, ""));

//     main();
// });

function process() {
    inputString = "226 687\n";
    inputString +=
        "967551 42711 652888 556131 432461 689084 878716 707516 462627 719131 921983 626364 4162 381455 628368 434733 845482 789342 129922 384203 516975 872544 958157 257969 383516 972027 753530 579132 732314 692990 938898 673695 304274 911598 386363 643777 897942 705604 307205 691832 525153 13560 131633 967903 704917 719007 275998 823133 381356 694812 130946 14247 881464 212321 535615 388113 263786 993408 303132 347246 957012 356253 80278 682192 79591 22168 399471 130259 302213 146877 143512 464001 323710 716383 252562 704230 528752 385676 433835 84087 324397 19622 726853 400158 765711 879403 717070 796189 630429 735240 899316 897255 682879 943532 548896 650909 128885 156561 260454 861309 463314 396080 486644 483429 306518 579819 726166 319856 689771 346559 466803 340669 602785 686432 259959 146736 878107 718444 272951 371357 690458 625990 672321 968982 211634 966184 806955 421135 486063 350431 856525 674382 968295 709010 81652 874036 487437 966921 318376 402219 956325 319682 346722 112336 643090 670617 700593 580506 695051 996996 486750 989387 738565 873231 311817 351118 77220 129572 900003 880777 109146 675069 829732 420069 519779 692670 391266 683566 349744 629055 305831 14934 216260 302900 347933 85417 307892 367031 433148 431774 871170 955638 629386 252687 151756 290426 642403 213008 693677 349307 80965 376767 879481 177826 382142 591034 733001 967608 381793 957699 382829 251634 641716 226476 530957 871857 658236 615467 401532 681505 485376 694364 144675 23169 673008 146049 581193 461940 22324 641029 878794 620846 558429 6994 41576 717757";
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
}

process();

function readLine() {
    return inputString[currentLine++];
}

// Complete the pairs function below.
function pairs(k, arr) {
    let found = [];
    let pair = 0;
    for (let i = 0; i < arr.length; i++) {
        let expectedPair;
        if (arr[i] <= k) {
            expectedPair = arr[i] + k;
        } else {
            expectedPair = arr[i] - k;
        }
        console.log("expectedPair::", expectedPair, "found::", found, "pair::", pair);

        if (!alreadyFound(found, arr[i], expectedPair) && arr.includes(expectedPair)) {
            found.push(arr[i]);
            found.push(expectedPair);
            pair++;
        }
    }
    return pair;
}

function alreadyFound(found, arrEle, expected) {
    const there = found.includes(arrEle) && found.includes(expected);
    console.log("alreadyFound::", there);
    return there;
}

function main() {
    const ws = fs.createWriteStream("./1.input.txt");

    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine()
        .split(" ")
        .map(arrTemp => parseInt(arrTemp, 10));

    let result = pairs(k, arr);

    ws.write(result + "\n");

    ws.end();
}
