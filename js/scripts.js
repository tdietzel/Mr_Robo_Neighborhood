let inputArray = [];
function beepBoop(num) {
    for (let i = 0; i <= num; i++) {
        if (i === 3) {
            inputArray.push("Won't you be my neighbor?");
        } else if (i === 2) {
            inputArray.push("Boop");
        } else if (i === 1) {
            inputArray.push("Beep");
        } else {
            inputArray.push(i);
        }
    }
    return inputArray;
}