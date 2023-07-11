import { Component } from '@angular/core';
import { TodoItem } from 'src/app/types/TodoItem';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  todos = [{id: 1, title: 'Open fridge', completed: true}, {id: 2, title: 'Close fridge', completed: false}];

}
