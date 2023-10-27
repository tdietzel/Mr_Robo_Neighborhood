// UI
window.addEventListener("load", () => {
    const form = document.querySelector("#numberInput");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNum = parseInt(document.getElementById("userNum").value);
        beepBoop(userNum);
    });    
});

function displayResults(inputArray) {
    const results = document.getElementById("results");
    results.innerHTML = inputArray.join(", ");
}

// Business Logic
function beepBoop(userNum) {
    let inputArray = [];
    let splitNumberArray = [];
    for (let i = 0; i <= userNum; i++) {
        if (i === 3) {
            inputArray.push("Won't you be my neighbor?");
        } else if (i === 2) {
            inputArray.push("Boop");
        } else if (i === 1) {
            inputArray.push("Beep");
        } else if (i > 9) {
            let numString = i.toString();
            splitNumberArray = numString.split('');
            if (splitNumberArray.includes('3')) {
                inputArray.push("Won't you be my neighbor?");
            } else if (splitNumberArray.includes('2')) {
                inputArray.push("Boop");
            } else if (splitNumberArray.includes('1')) {
                inputArray.push("Beep");
            }
        } else {
            inputArray.push(i);
        }
    }
    displayResults(inputArray);
}