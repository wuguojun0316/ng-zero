export class TodoModel {
    id: string;
    desc: string;
    completed: boolean;

    constructor(id: string, desc: string, completed: boolean) {
        this.id = id;
        this.desc = desc;
        this.completed = completed;
    }
}