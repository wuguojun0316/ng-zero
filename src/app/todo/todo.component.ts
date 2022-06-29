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

  todos: TodoModel[] = [];
  desc = '';

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.service.addTodo(this.desc).then((todo: TodoModel[]) => {
      this.todos = [...this.todos, ...todo];
      console.log(this.todos);
    });
    this.desc = '';
    
  }

  toggleTodo(todo: TodoModel) {

  }

  removeTodo(todo: TodoModel) {

  }

  getTodos(): void {
    
  }

}
