import { Injectable } from '@angular/core';
import { TodoItem } from '../types/TodoItem';
import { getCurrentDay, getCurrentTime } from 'src/app/helpers/DateHelper';
import { Observable, of } from 'rxjs';

interface ITodoService {
  addTodo(todoItem: TodoItem): void;
  deleteTodo(todoId: number): void;
  editTodo(todoId: number, title: string): void;
  setTodos(newTodo: TodoItem): void;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: TodoItem[] = [{id: 1, title: 'Open fridge', completed: true}, {id: 2, title: 'Close fridge', completed: false}];

  constructor() { }

  getTodos(): Observable<TodoItem[]> {
    const todos = of(this.todos);
    return todos;
  }

  addTodo(todoItem: TodoItem) : Observable<TodoItem>  {
    const newTodo: TodoItem = {
      id: todoItem.id,
      title: todoItem.title,
      completed: todoItem.completed,
      updated: false,
      day: getCurrentDay(),
      time: getCurrentTime()
    };

    return of(newTodo);
  }

  setTodos(newTodo: TodoItem) {
    this.todos = [newTodo, ...this.todos];
    console.log('todos', this.todos);
  }
}
