const finalPosition = function(moves) {

let x, y;
x = 0;
y = 0;
let position = [];
for (var dir of moves) {
 if (dir == 'north') {
    y++;
 } else if (dir == 'south') {
    y--;
 } else if (dir == 'east') {
    x++
 } else {
    x-- 
 }
}
 position.push(x);
 position.push(y);
 return position;
}

//const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves);


