let inputArray = [];
let splitNumberArray = [];
function beepBoop(num) {
    for (let i = 0; i <= num; i++) {
        if (i === 3) {
            inputArray.push("Won't you be my neighbor?");
        } else if (i === 2) {
            inputArray.push("Boop");
        } else if (i === 1) {
            inputArray.push("Beep");
        }
        if (i > 9) {
            let numString = i.toString();
            splitNumberArray = numString.split('');
            console.log(splitNumberArray)
        } else {
            inputArray.push(i);
        }
    }
    return inputArray;
}