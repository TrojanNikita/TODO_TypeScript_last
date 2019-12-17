# TODO_TypeScript_last



# Edit existing computer
//Получить все
GET     /todos                  controllers.HomeController.getTodos
//Добавить новый (параметр: name:String)
POST    /todos/new              controllers.HomeController.addTodo
//Наверное не понадобится, но получить конкретный по id
GET     /todos/:id            controllers.HomeController.getTodo(id:Long)
#GET     /todos/delete         controllers.HomeController.deleteAllDone
//Изменить название (параметр: name:String)
POST    /todo/:id             controllers.HomeController.updateTodo(id:Long)
//Выполнить (параметр: текущий done:Boolean)
POST    /todo/:id/change      controllers.HomeController.updateTodoDone(id:Long)
//Удалить (параметр: id:Long)
POST    /todo/del             controllers.HomeController.deleteTodo