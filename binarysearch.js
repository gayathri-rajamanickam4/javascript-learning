function binarySearch(input, rightIndex, leftIndex, searchValue) {
    if (leftIndex < rightIndex) return -1;
    const mid = Math.floor(rightIndex + leftIndex / 2);
    console.log("input::input[mid]::searchValue", input, input[mid], searchValue);

    if (input[mid] === searchValue) return mid;

    if (searchValue < input[mid]) {
        return binarySearch(input, 0, mid - 1, searchValue);
    } else {
        return binarySearch(input, mid + 1, input.length - 1, searchValue);
    }
}

let result = binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 0);
console.log(result);
