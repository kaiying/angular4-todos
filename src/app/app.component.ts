import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputHint: string = 'What needs to be done?';
    todos: string[] = [];

    addTodo(todo: HTMLInputElement) {
        this.todos = [...this.todos, todo.value];
        todo.value = '';
    }
}
