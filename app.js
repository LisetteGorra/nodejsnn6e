console.log(__dirname);
console.log(__filename);

var time = 0;

setInterval(function(){ //interval. A clock breaks time down into intervals of seconds, minutes, and hours. An interval is a distinct measure of time or the physical or temporal distance between two things.
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000);


















// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');