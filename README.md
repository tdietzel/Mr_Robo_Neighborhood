# Describe: beepBoop()

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