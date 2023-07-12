import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/types/TodoItem';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todos: TodoItem[] = [];
  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;

}
