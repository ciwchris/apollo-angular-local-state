import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { GraphQLModule } from './graphql/graphql.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { FilterLinkComponent } from './filter-link.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, GraphQLModule],
  declarations: [
    AppComponent,
    FooterComponent,
    FilterLinkComponent,
    TodoFormComponent,
    TodoComponent,
    TodoListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
