var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

app.get('/', function(req, res){
   res.render('index'); 
});

app.get('/contact', function(req, res){
   console.log(req.query);
   res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
   console.log(req.body);
   res.render('contact-success', {data: req.body});
});

app.get('/profile/:name' , function(req, res){
    var data = {age: 33, job: 'dragon', hobbies:['sleeping', 'fighting', 'eating']};
   res.render('profile', {person: req.params.name, data: data});
});
 
app.listen(3000);











// var http = require('http');

// var fs = require('fs');

// // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

 


// var server = http.createServer(function(req, res){
//     console.log('request was made:' + req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.irl === '/contact-usç'){
//       fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }else if(req.url === '/api/ninjas'){
//         var ninjas = [{name: 'Beanie', age: 33}, {name: 'smitty, age: 30'}];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(ninjas));
//     } else{
//       res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);

//     }  

// }); 

//     // var myObj = {
//     //     name: 'pip',
//     //     job: 'dragon',
//     //     age: 22
//     // };
//     // res.end("I'm hungry");
  
   
//     // var myReadStream = fs.createReadStream(__dirname + '/index.txt', 'utf8');
//     // myReadStream.pipe(res);

    
// //     res.end('Hey you!');


// server.listen(3000, '127.0.0.1');
// console.log('hey, I am now listening to port 3000');

















// // var fs = require('fs');
// // fs.unlink('./stuff/writeME.txt', function(){
    
// // fs.rmdir('stuff');
// // });




// // // fs.mkdirSync('stuff');
// // // fs.rmdirSync('stuff');



// // // fs.mkdir('stuff', function(){
// // //     fs.readFile('readME.txt', 'utf8', function(err, data){
// // //     fs.writeFile('./stuff/writeME.txt', data);
// // //     });
// // // });










// // // fs.unlink('writeME.txt');