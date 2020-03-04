import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todoList = [];

getList = ()=> this.todoList;
//add task
addTodo = (task)=>{
  this.todoList.push(task);
  return this.todoList;
}
//remove task
removeTask = (index) => this.todoList.splice (index,1);


}
