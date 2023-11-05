# Mr. Roboger's Neighborhood
#### By Trent Dietzel

## Table of Contents
- [About](#about)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Known Bugs](#known-bugs)
- [License](#license)
- [Contact](#contact)
- [Tests](#tests)

## About
Mr. Roboger's Neighborhood is a web application designed to help users practice and showcase their skills in using loops. It focuses on implementing Test-Driven Development (TDD) to break down a problem into smaller, more manageable pieces of functionality.

The primary functionality of the application is to take a user's input number and return a list of values from 0 to the input number. These values undergo specific substitutions based on the digits they contain:
- For numbers that contain the digit 1, all digits are replaced with "Beep!"
- For numbers that contain the digit 2, all digits are replaced with "Boop!"
- For numbers that contain the digit 3, all digits are replaced with "Won't you be my neighbor?"

These substitutions follow a hierarchical order, with "Won't you be my neighbor?" taking precedence over "Boop!" and "Boop!" taking precedence over "Beep!"

## Demo
You can try out the live demo of Mr. Roboger's Neighborhood [here](https://tdietzel22.github.io/Mr_Robo_Neighborhood/).

## Technologies Used
- HTML
- CSS
- JavaScript

## Features
- **Number Sequence**: Generate a list of numbers from 0 to the user's input number.
- **Digit Substitution**: Replace digits in the sequence based on the rules described above.

## Installation

Follow these steps to set up the project locally:
1. Open Git BASH [Download Link](https://gitforwindows.org/)
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/Mr_Robo_Neighborhood.git
3. Open the project directory:
   ```bash
   cd Mr_Robo_Neighborhood
4. Open the __index.html__ file in your web browser or use a code editor like __Visual Studio Code__ for further development.

## Usage

To use Mr. Roboger's Neighborhood:
1. Visit the website [Here](https://tdietzel22.github.io/Mr_Robo_Neighborhood/).
2. Enter a number in the input field.
3. Choose a direction for displaying the numbers (lowest to highest or highest to lowest).
4. Click the "Submit" button.
5. View the generated number sequence with substitutions.
6. Have fun exploring!

## Contributing

I welcome contributions to improve the project. If you'd like to contribute, please follow these guidelines:
1. Fork the project repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with a descriptive commit message.
5. Push your branch to your forked repository.
6. Create a pull request to the main repository.

## Known Bugs

* _N/A_

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions, suggestions, or inquiries, please contact **Trent Dietzel** at _dietzelbiz@outlook.com_.

## __TESTS__

### Describe: beepBoop()

__Test #1:__ "It should return an array of numbers from 0 to the user's inputted number"
__Code:__
``` 
let num = 5;
beepBoop(num);
```
__Expected Output:__ [0, 1, 2, 3, 4, 5]

__Test #2:__ "It should replace numbers that contain a "1" with "Beep"
__Code:__
```
let num = 5;
beepBoop(num);
```
__Expected Output:__ [0, 'Beep', 2, 3, 4, 5]

__Test #3:__ "It should replace numbers that contain a "2" with "Boop"
__Code:__
```
let num = 5;
beepBoop(num);
```
__Expected Output:__ [0, 'Beep', 'Boop', 3, 4, 5]

__Test #4:__ "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
__Code:__
```
let num = 5;
beepBoop(num);
```
__Expected Output:__ [0, 'Beep', 'Boop', "Won't you be my neighbor?", 4, 5]

__Test #5:__ "It should return numbers > 9 into an array separating the digits."
__Code:__
```
let num = 10;
beepBoop(num);
```
__Expected Output:__ ['1', '0']

__Test #6:__ "It should return numbers > 9 with the correct phrase according to hierarchy"
__Code:__
```
let num = 23;
beepBoop(num);
```
__Expected Output:__ [0, 'Beep', 'Boop', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop', "Won't you be my neighbor?", 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Boop', 'Boop', 'Boop', "Won't you be my neighbor?"]