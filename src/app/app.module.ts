import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todos/todo-container/todo-container.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoCounterComponent } from './todos/todo-counter/todo-counter.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TodoNewComponent } from './todos/todo-new/todo-new.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoItemComponent,
    TodoCounterComponent,
    HeaderComponent,
    NavbarComponent,
    TodoNewComponent,
    TodoListComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
