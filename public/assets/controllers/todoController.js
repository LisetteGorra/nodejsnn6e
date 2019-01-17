var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongod://<dbuser>:<dbpassword>@ds017195.mlab.com:17195/todo');

//create a Schema - this is like ablueprint for our data
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'bye chocolate'}).save(function(error){
    if (error) throw error;
    console.log('item saved');
});

var data = [{item: 'get eggs'}, {item: 'take out trash'}, {item:'do homework'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.export = function(app){
    
app.get('/todo', function(req, res){

    
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
