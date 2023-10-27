let inputArray = [];
function beepBoop(num) {
    for (let i = 0; i <= num; i++) {
        if (i === 1) {
            inputArray.push("Beep");
        } else {
            inputArray.push(i);
        }
    }
    
    return inputArray;
}