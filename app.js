var fs = require('fs');

fs.readFile('readME.txt', 'utf8', function(err, data){
   fs.writeFile('writeME.txt', data); 


    // console.log(data);
});

// console.log('test');

// var readME = fs.readFileSync('readME.txt', 'utf8');
// console.log(readME);


// var readME = fs.readFileSync('readME.txt', 'utf8');