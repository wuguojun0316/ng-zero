import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';
import { UUID } from 'angular2-uuid';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private api_url = 'api/todos';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  todoModel: TodoModel[] = [];

  constructor(private httpClient: HttpClient) { 
    
  }

  addTodo(todoItem: string): Promise<TodoModel[]> {
    let todo = {
      id: 1,
      desc: todoItem,
      completed: false
    };
    //return this.httpClient.post(this.api_url, { headers: this.headers, params: {parma: JSON.stringify(todo)},  responseType: 'json'})
    return this.httpClient.get(this.api_url, { headers: this.headers})
                   .toPromise()
                   .then((res:any) => {
                      console.log(res);
                      return res as TodoModel[];
                   })
                   .catch(this.handleError);

    // this.todoModel.push(todo);
    // return this.todoModel;
  }

  private handleError(error: any): Promise<any> {
    console.log('error occurred:', error);
    return Promise.reject(error.message || error);
  }
}
