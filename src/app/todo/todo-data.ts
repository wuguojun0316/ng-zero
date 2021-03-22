import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoModel } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
    createDb() {
        let todos: TodoModel[] = [
            {
                id:"f3e899de-7c30-9f85-c4e0-392f47032ce1",
                desc: 'JavaScript',
                completed: true
            },
            {
                id:"4fec99b0-d4a5-fdfb-9dbc-c8d2098e78c5",
                desc: 'Golang',
                completed: false
            }
        ];
        return {todos};
    }
}