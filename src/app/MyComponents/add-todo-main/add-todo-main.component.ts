import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo-main',
  templateUrl: './add-todo-main.component.html',
  styleUrls: ['./add-todo-main.component.css']
})
export class AddTodoMainComponent {

  todos!: Todo[];

  addTodo(todo:Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
