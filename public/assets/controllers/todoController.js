var bodyParser = require('body-parser');

var data = [{item: 'get eggs'}, {item: 'take out trash'}, {item:'do homework'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.export = function(app){
    
app.get('/todo', function(req, res){
<<<<<<< HEAD
<<<<<<< HEAD
=======
    res.render('todo');
>>>>>>> version24.0
=======
    res.render('todo', {todos: data});
>>>>>>> version24.0
    
});

app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
       return todo.item.replace(/ /g, '-')!== req.params.item; 
    });
    res.joson(data);
});

};
