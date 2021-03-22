import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo.model';
import { UUID } from 'angular2-uuid';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todoModle: TodoModel[] = [];
  desc = '';

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  addTodoModel() {
    this.todoModle = this.service.addTodo(this.desc);
    this.desc = '';
    
  }

}
