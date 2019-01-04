var events = require('events');

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var tom = new Person ('tom');
var mary = new Person ('mary');
var john = new Person ('john'); 

var people = [tom, mary, john];

people.forEach(function(person){
   person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg);
   }); 
});


tom.emit('speak', 'wassup');
mary.emit('speak', 'how are you! Long time no see!!!');







// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

