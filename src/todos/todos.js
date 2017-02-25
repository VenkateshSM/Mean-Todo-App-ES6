import _ from 'lodash';

export default function($scope,todoFactory) {
   
   let params = {
      createHasInput : false
   };
     
     //$scope.todos = [];

     todoFactory.getTasks($scope);

     console.log();

	 $scope.onCompletedTask = todo => {
         todo.isCompleted = !todo.isCompleted;
	 };

	 $scope.onTodoCancel = todo => {
	 	 todo.isEditing = false;
	 }

	 $scope.onTodoEdit = (todo) => {
         todo.isEditing = true;
         todo.updatedTask = todo.task;
	 };
    
     const {createTask,updateTask,deleteTask,watchCreateTaskInput} = todoFactory;

	 $scope.createTask = createTask.bind(this,$scope,params);

	 $scope.updateTask = updateTask.bind(this,$scope);
    
	 $scope.deleteTodo = deleteTask.bind(this,$scope);

	 $scope.$watch('createTaskInput',watchCreateTaskInput.bind(this,params,$scope));
}