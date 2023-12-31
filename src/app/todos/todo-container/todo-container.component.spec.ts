import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { TodoCounterComponent } from '../todo-counter/todo-counter.component';
import { TodoNewComponent } from '../todo-new/todo-new.component';
import { FormsModule } from '@angular/forms';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        TodoContainerComponent,
        HeaderComponent,
        TodoCounterComponent,
        TodoNewComponent,
      ],
    });
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render the header`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render the counter component`, () => {
    const fixture = TestBed.createComponent(TodoCounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render the create todo component`, () => {
    const fixture = TestBed.createComponent(TodoNewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
