export class TodoModel {
    id: number;
    desc: string;
    completed: boolean;

    constructor(id: number, desc: string, completed: boolean) {
        this.id = id;
        this.desc = desc;
        this.completed = completed;
    }
}