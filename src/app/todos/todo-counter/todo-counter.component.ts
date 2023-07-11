import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/types/TodoItem';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent {

  @Input() todoItems: TodoItem[] = [];

  get completedTasks(): number {
    return this.todoItems.filter((todo) => todo.completed === true).length;
  }

  get hasItems(): boolean {
    return this.todoItems.length > 0;
  }
}
