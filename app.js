function callFunction(fun){
    fun();
}


//normal function statement 

// function sayHi(){
//     console.log('hi');
// }
// sayHi();

//function expression (nameless function) ... works with asyncronous 

var sayBye = function(){
    console.log('bye');
    
};

callFunction(sayBye);









