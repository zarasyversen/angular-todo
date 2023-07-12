import { Injectable } from '@angular/core';
import { TodoItem } from '../types/TodoItem';
import { getCurrentDay, getCurrentTime } from 'src/app/helpers/DateHelper';
import { Observable, of } from 'rxjs';
import { LocalService } from './local.service';

interface ITodoService {
  getTodos(): Observable<TodoItem[]>;
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
  todos: TodoItem[] = [];
  todoKey = 'todos';

  constructor(private localService: LocalService) {
    const temp = localService.getData(this.todoKey);
    const savedTodos = temp ? (JSON.parse(temp) as TodoItem[]) : [];
    this.todos = savedTodos;
  }

  getTodos(): Observable<TodoItem[]> {
    const todos = of(this.todos);
    return todos;
  }

  setTodos(newTodo: TodoItem) {
    this.todos = [newTodo, ...this.todos];
    this.saveTodos();
  }

  saveTodos() {
    const temp = JSON.stringify(this.todos);
    this.localService.saveData(this.todoKey, temp);
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
    this.saveTodos();
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
    this.saveTodos();
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
    console.log('completed', this.todos);
    this.saveTodos();
  }
}
