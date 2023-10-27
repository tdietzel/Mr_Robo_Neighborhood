// UI
window.addEventListener("load", () => {
    const form = document.querySelector("#numberInput");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNum = parseInt(document.getElementById("userNum").value);
        const userName = document.getElementById("userName").value;
        beepBoop(userNum, userName);
    });    
});

function displayResults(inputArray) {
    const results = document.getElementById("results");
    results.innerHTML = inputArray.join(", ");
}

// Business Logic
function beepBoop(userNum, userName) {
    let inputArray = [];
    let splitNumberArray = [];
    for (let i = 0; i <= userNum; i++) {
        if (i === 3) {
            inputArray.push("Won't you be my neighbor, " + userName + " ?");
        } else if (i === 2) {
            inputArray.push("Boop");
        } else if (i === 1) {
            inputArray.push("Beep");
        } else if (i > 9) {
            let numString = i.toString();
            splitNumberArray = numString.split('');
            if (splitNumberArray.includes('3')) {
                inputArray.push("Won't you be my neighbor, " + userName + " ?");
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