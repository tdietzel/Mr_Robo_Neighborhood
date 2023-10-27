# _Mr. Roboger's Neighborhood_

#### By _**Trent Dietzel**_

#### _A web application that returns a list of values from 0 to the user's inputted number with substitutions made following a hierarchy of rules ( read below )._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_A web application to practice and showcase loops. It focuses on using TDD to break down the problem into smaller pieces of functionality (*Bottom of page*). _It will take a number from the user and return a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:_
* For numbers that contain a 1, all digits are replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
* __These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.__

## Setup/Installation Requirements

* _Fork your own copy of this repository from [GitHub](https://github.com/tdietzel22/Mr_Robo_Neighborhood)_
* _Open Git BASH [Download Link](https://gitforwindows.org/)_
* _Use 'git clone projecturl' to clone the project from the forked repo_
* _Open the project in [VS Code](https://code.visualstudio.com/) (Git shortcut: enter 'code .' after navigating to the top level of the project directory)_
* _View site on [github-pages]()_ __<~~ Try it out now!__

## Known Bugs

* _N/A_

## License

_MIT License_

Copyright (c) _2023 Trent Dietzel_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2023 Trent Dietzel_


# __PROJECT TESTS__

### Describe: beepBoop()

__Test #1:__ "It should return an array of numbers from 0 to the user's inputted number"
__Code:__
let num = 5;
beepBoop(num);
__Expected Output:__ [0, 1, 2, 3, 4, 5]

__Test #2:__ "It should replace numbers that contain a "1" with "Beep"
__Code:__
let num = 5;
beepBoop(num);
__Expected Output:__ [0, 'Beep', 2, 3, 4, 5]

__Test #3:__ "It should replace numbers that contain a "2" with "Boop"
__Code:__
let num = 5;
beepBoop(num);
__Expected Output:__ [0, 'Beep', 'Boop', 3, 4, 5]

__Test #4:__ "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
__Code:__
let num = 5;
beepBoop(num);
__Expected Output:__ [0, 'Beep', 'Boop', "Won't you be my neighbor?", 4, 5]

__Test #5:__ "It should return numbers > 9 into an array separating the digits."
__Code:__
let num = 10;
beepBoop(num);
__Expected Output:__ ['1', '0']

__Test #6:__ "It should return numbers > 9 with the correct phrase according to hierarchy"
__Code:__
let num = 23;
beepBoop(num);
__Expected Output:__ [0, 'Beep', 'Boop', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop', "Won't you be my neighbor?", 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Boop', 'Boop', 'Boop', "Won't you be my neighbor?"]