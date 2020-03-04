import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskList = [];
  constructor( private todoService:TodoService) { 
    this.taskList = this.todoService.getList();
  }

addTask =(task)=> {
this.taskList=this.todoService.addTodo(task);
}
deleteTask = (index) => this.todoService.removeTask(index);
}
