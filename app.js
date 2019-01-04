var fs = require('fs');
fs.unlink('./stuff/writeME.txt', function(){
    
fs.rmdir('stuff');
});




// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');



// fs.mkdir('stuff', function(){
//     fs.readFile('readME.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeME.txt', data);
//     });
// });










// fs.unlink('writeME.txt');