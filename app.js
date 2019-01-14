var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});










// var server = http.createServer(function(req, res){
//     console.log('request was made:' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey you!');
// });

// server.listen(3000, '127.0.0.1');
// console.log('hey, I am now listening to port 3000');

















// var fs = require('fs');
// fs.unlink('./stuff/writeME.txt', function(){
    
// fs.rmdir('stuff');
// });




// // fs.mkdirSync('stuff');
// // fs.rmdirSync('stuff');



// // fs.mkdir('stuff', function(){
// //     fs.readFile('readME.txt', 'utf8', function(err, data){
// //     fs.writeFile('./stuff/writeME.txt', data);
// //     });
// // });










// // fs.unlink('writeME.txt');