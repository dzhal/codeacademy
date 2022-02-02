let validateCred = (arr) => {
    let result = 0;
    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                if (2 * arr[i] > 9) {
                    result = result + (2 * arr[i] - 9);
                } else {
                    result = result + 2 * arr[i];
                }
            } else {
                result = result + arr[i];
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                if (2 * arr[i] > 9) {
                    result = result + (2 * arr[i] - 9);
                } else {
                    result = result + 2 * arr[i];
                }
            } else {
                result = result + 2 * arr[i];
            }
        }
    }
    return result % 10 === 0;
};

const valid = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
console.log(validateCred(valid));
