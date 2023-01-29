import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoMainComponent } from './MyComponents/add-todo-main/add-todo-main.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  { path: '', component:TodosComponent},
  { path: 'add', component:AddTodoMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
