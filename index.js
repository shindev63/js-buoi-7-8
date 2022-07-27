var arr = [];
var size = 5; // Array size

for (var i = 0; i < size; i++) {


    arr[i] = prompt('Nhap gia tri ' + (i + 1));
}
// var x = prompt('Nhap vi tri');
// var y = prompt('Nhap vi tri');
// x * 1;
// y * 1;
// var k = prompt('Nhap gia tri');
// k * 1;
// bai 1
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= 1;
            sum += arr[i];
        }
    }

    return sum;
}
// bai 2
function CountArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }

    return count;
}
// bai 3
function minArray(arr) {
    var min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
// bai 4
function minArrayPositive(arr) {

    for (let i = 0; i < arr.length; i++) {
        var min = arr[i];
        if (min > 0) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[j] > 0) {
                    if (min > arr[j]) {
                        min = arr[j];
                    }
                }
            }
        }
    }
    return min;
}
// bai 5
function containsEvenNums(arr) {
    var num = -1;
    for (let i = 0; i < arr.length; i++) {
        //checks if the value at i is even, and if it is even, it sets num to that value. 
        if (arr[i] % 2 == 0) {
            num = arr[i];
        }
    }

    //printing out num 
    return num;
}
// bai 6
function swap(input, x, y) {
    let temp = input[x];

    input[x] = input[y];
    input[y] = temp;
}

// bai 8
// function PrintPrime(arr, k) {
//     var tmpValue = 0;
//     if (arr[i] != undefined && arr[k] != undefined) {
//         tmpValue = arr[i];
//         arr[i] = arr[k];
//         arr[k] = tmpValue;
//     }
// }
//printing out num 
// bai 9
function bai9(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 1 == 0) {
            sum++;
        }
    }

    return sum;
}
function baiTap10(arr) {
    var i = 0;
    var countPos = 0;
    var countNeg = 0;
    for (i = 0; i < arr.length - 1; i++) {
        if (i >= 0) {
            countPos++
        }
        else {
            countNeg++
        }
    }

    if (countNeg == countPos) {
        console.log("Số dương = Số âm")
    }
    else if (countNeg > countPos) {
        console.log("Số dương < Số âm")
    }
    else if (countNeg < countPos) {
        console.log("Số dương > Số âm")
    }
}

console.log(arr);
console.log(sumArray(arr));
console.log(CountArray(arr));
console.log(minArray(arr));
console.log(minArrayPositive(arr));
console.log(containsEvenNums(arr));
swap(arr, x, y);
console.log(arr);
// bai 7
console.log(arr.sort());
PrintPrime(arr, k);
console.log(arr);
console.log(bai9(arr));
baiTap10(arr);