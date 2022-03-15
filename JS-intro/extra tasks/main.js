console.log("ready");

let arr_1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arr_2 = [7, 1, 5, 3, 6, 4];

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    console.log(maxSum);
}

getMaxSubSum(arr_1);
