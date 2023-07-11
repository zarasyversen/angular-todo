import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/types/TodoItem';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent {
  @Input() hasTodos: boolean = false;

  @Output() onTodoAdded = new EventEmitter<TodoItem>();

  model = new TodoItem(Date.now(), '', false);

  onSubmit() { 
    this.onTodoAdded.emit(this.model);
  }

}
