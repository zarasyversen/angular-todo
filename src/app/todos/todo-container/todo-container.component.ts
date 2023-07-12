import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoItem } from 'src/app/types/TodoItem';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent {
  constructor(private todoService: TodoService) {}

  todos: TodoItem[] = [];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addNewTodo(todo: TodoItem): void {
    this.todoService.addTodo(todo);
    this.getTodos();
  }

  deleteTodo(todoId: number): void {
    console.log('deleting, ', todoId);
    this.todoService.deleteTodo(todoId);
    this.getTodos();
  }

  editTodo(id: number, title: string) {
    this.todoService.editTodo(id, title);
  }
}
