// UI
window.addEventListener("load", () => {
    const form = document.querySelector("#numberInput");

    // Add a submit event listener to the form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNum = parseInt(document.getElementById("userNum").value); // Get the user's number input
        const userName = document.getElementById("userName").value; // Get the user's name input
        beepBoop(userNum, userName);
    });

    // Get the toggle (light/dark mode) element by its ID
    const toggle = document.getElementById("toggle");

    // Toggle light/dark mode on click
    toggle.onclick = function() {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
            toggle.src = "img/moon.png";
        } else {
            toggle.src = "img/sun.png";
        }
    }
});

// Function to display results in the HTML
function displayResults(inputArray) {
    const results = document.getElementById("results");
    results.innerHTML = inputArray.join(", ");
}

// Business Logic
function beepBoop(userNum, userName) {
    let inputArray = [];
    const directionChoice = document.querySelector("input[name='direction']:checked").value; // Get the selected direction (forward or backward)
    for (let i = 0; i <= userNum; i++) {
        if (i === 3) {
            inputArray.push("Won't you be my neighbor, " + userName + " ?");
        } else if (i === 2) {
            inputArray.push("Boop");
        } else if (i === 1) {
            inputArray.push("Beep");
        } else if (i > 9) {
            let numString = i.toString();
            if (numString.includes('3')) {
                inputArray.push("Won't you be my neighbor, " + userName + " ?");
            } else if (numString.includes('2')) {
                inputArray.push("Boop");
            } else if (numString.includes('1')) {
                inputArray.push("Beep");
            }
        } else {
            inputArray.push(i);
        }
    }
    if (directionChoice === 'forward') {
        displayResults(inputArray); // Display the results in the original order
    } else if (directionChoice === 'backward') {
        displayResults(inputArray.reverse()); // Display the results in reverse order
    }
}
