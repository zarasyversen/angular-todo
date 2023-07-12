import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from 'src/app/types/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: TodoItem | null = null;

  @Output() onTodoDeleted = new EventEmitter<number>();
  @Output() onTodoCompleted = new EventEmitter<number>();
  @Output() onTodoEdit = new EventEmitter<{ id: number; newTitle: string }>();

  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;

  isEditing = false;
  editInput: string = '';

  ngOnInit(): void {
    this.editInput = this.todo ? this.todo.title : '';
  }

  deleteTodo(todoId: number) {
    this.onTodoDeleted.emit(todoId);
  }

  handleEdit(todoId: number) {
    this.onTodoEdit.emit({
      id: todoId,
      newTitle: this.editInput,
    });
  }

  updateEdit(e: any) {
    if (e.keyCode === 13) {
      this.isEditing = !this.isEditing;
    }
  }

  completeTodo(todoId: number) {
    this.onTodoCompleted.emit(todoId);
  }
}
