var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todosdb");

var Todo = mongoose.model('Todo',{
	task : String,
	isCompleted : Boolean,
	isEditing : Boolean
});

module.exports.Todo = Todo;