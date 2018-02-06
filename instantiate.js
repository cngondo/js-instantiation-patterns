/*
Functional Instantiation:
Create a function and inside the function create an empty object.
Add properties and methods to the empty object

*/

var Animal = function(species, name){
	var obj = {};

	obj.species = species;
	obj.name = name;

	obj.makesound = function(){
		//whatever sound
	}

	obj.eat = function(){
		//whatever food
	}

	return obj;
}
//Implementation
var tiger = Animal('tiger', 'leo');
tiger.eat();
tiger.sleep(); //all methods are from the Animal function

/*
Functional Shared Instantiation
Works like above instead methods are defined in another object and we
use the extend to connect the methods and the original object
*/

var Animal = function(species, name){
	var obj = {}

	obj.species = species
	obj.name = name

	extend(obj, objMethods); //links  to the object that has the functions

	return obj;
}

var extend = function(obj, methods){
	for(var key in methods){
		obj[key] = methods[key];
	}
}

var objectMethods = {
	makesound: function(){
		//whatever sound
	},
	eat: function(){
		//whatever food
	},
	sleep: function(){
		//whatever hours
	}
}
// Implementation
var tiger = Animal('tiger', 'leo');
tiger.eat();
tiger.makesound();

/*
Prototypal Instantiation:
Utilizes prototype chains to create objects.
Create all methods in a seperate object, then create the function.
Inside the function use "Object.create" to attache the methods 
*/

var Animal = function(species, name){
	var obj = Object.create(objMethods); //links to the object which has the functions

	obj.species = species;
	obj.name = name;

	return obj;
}

var objMethods = {
	makesound: function(){
		//whatever sound
	},
	eat: function(){
		//whatever food
	},
	sleep: function(){
		//whatever hours
	}
}
// Implementation
var tiger = Animal('tiger', 'leo');
tiger.eat();
tiger.makesound();

/*
Pseudoclassical Instantiation:
Instead of creating a new variable and assigning Object.create() to it, 
Pseudoclassical instantiation assigns it to “this”.
To create a new object, you use the keyword "new"
*/
var Animal = function(species, name){
	this.species = species;
	this.name = name;
}

Animal.prototype.makeSound = function(){
	//whatever sound
}
Animal.prototype.eat = function(){
	//whatever food
}
Animal.prototype.sleep = function(){
	//whatever hours
}
//Implementation
var tiger = new Animal('tiger', 'leo');
tiger.eat();
tiger.makesound();