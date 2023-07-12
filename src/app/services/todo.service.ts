import { Injectable } from '@angular/core';
import { TodoItem } from '../types/TodoItem';
import { getCurrentDay, getCurrentTime } from 'src/app/helpers/DateHelper';
import { Observable, of } from 'rxjs';

interface ITodoService {
  getTodos(): Observable<TodoItem[]> ;
  setTodos(newTodo: TodoItem): void;
  addTodo(todoItem: TodoItem): void;
  deleteTodo(todoId: number): void;
  editTodo(todoId: number, title: string): void;
  completeTodo(todoId: number): void;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ITodoService {
  todos: TodoItem[] = [
    { id: 1, title: 'Open fridge', completed: true },
    { id: 2, title: 'Close fridge', completed: false },
  ];
  
  constructor() {}
  
  getTodos(): Observable<TodoItem[]> {
    const todos = of(this.todos);
    return todos;
  }
  
  setTodos(newTodo: TodoItem) {
    this.todos = [newTodo, ...this.todos];
  }
  
  addTodo(todoItem: TodoItem): void {
    const newTodo: TodoItem = {
      id: todoItem.id,
      title: todoItem.title,
      completed: todoItem.completed,
      updated: false,
      day: getCurrentDay(),
      time: getCurrentTime(),
    };

    this.setTodos(newTodo);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  editTodo(todoId: number, title: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.title = title;
        todo.updated = true;
        todo.day = getCurrentDay();
        todo.time = getCurrentTime();
      }
      return todo;
    });
  }

  completeTodo(todoId: number): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }

}
