import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoModel } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
    createDb() {
        let todos: TodoModel[] = [
            {
                id: 100,
                desc: 'JavaScript',
                completed: true
            },
            {
                id: 110,
                desc: 'Golang',
                completed: false
            }
        ];
        console.log({todos});
        return {todos};
    }
}