import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TodoItem } from 'src/app/types/TodoItem';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: TodoItem[] = [];

  @Output() onTodoDeleted = new EventEmitter<number>();
  @Output() onTodoEdit = new EventEmitter<{ id: number; newTitle: string }>();

  //@ViewChild('searchInput') searchInput: ElementRef;

  faTimes = faTimes;
  faSearch = faSearch;

  filteredTodos: TodoItem[] = [];
  isSearching = false;
  searchTerm = '';
  hasNoResults = false;

  ngOnInit() {
    this.filteredTodos = this.todos;
  }

  deleteTodo(todoId: number) {
    this.onTodoDeleted.emit(todoId);
  }

  editTodo(id: number, title: string) {
    this.onTodoEdit.emit({
      id: id,
      newTitle: title,
    });
  }

  toggleSearch() {
    this.isSearching = !this.isSearching;
    this.searchTerm = '';
    this.filteredTodos = this.todos;
    this.hasNoResults = false;
  }

  searchTodos() {
    if (this.searchTerm) {
      const matchedTodos = this.todos.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
        );
      });

      if (matchedTodos.length > 0) {
        this.filteredTodos = matchedTodos;
        this.hasNoResults = false;
      } else {
        this.hasNoResults = true;
        this.filteredTodos = [];
      }
    } else {
      this.filteredTodos = this.todos;
      this.hasNoResults = false;
    }
  }
}
