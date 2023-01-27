import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] | undefined;
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: "Hello  Ansh", 
        desc: "This is me",
        active: true
      },
      {
        sno: 2,
        title: "Hello  Ansh2", 
        desc: "This is me2",
        active: true
      },
      {
        sno: 3,
        title: "Hello  Ansh3", 
        desc: "This is me3",
        active: true
      }
    ]
  }

}
