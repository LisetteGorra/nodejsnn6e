var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongod://<dbuser>:<dbpassword>@ds017195.mlab.com:17195/todo');

//create a Schema - this is like ablueprint for our data
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'bye chocolate'}).save(function(error){
//     if (error) throw error;
//     console.log('item saved');
// });

//var data = [{item: 'get eggs'}, {item: 'take out trash'}, {item:'do homework'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
app.get('/todo', function(req, res){
    //get data from mongodb and pass it to the view 
    Todo.find({}, function(error, data){
        if(error) throw error;
        res.render('todo', {todos: data});
  });
    
});

app.post('/todo', urlencodedParser, function(req, res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(error, data){
        if (error) throw error;
        res.json(data);
    });
    res.json(data);
});

    
};

app.delete('/todo/:item', function(req, res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(error, data){
        if (error) throw error;
        res.json(data);
    });
  
});

});

