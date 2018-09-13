import { Component, OnInit } from '@angular/core';
import { gql, Apollo } from 'apollo-angular-boost';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Query } from './generated/graphql';

const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo *ngFor="let task of todos | async" [task]="task"></todo>
    </ul>
  `
})
export class TodoListComponent implements OnInit {
  todos: Observable<any[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.todos = this.apollo
      .watchQuery<Query>({
        query: GET_TODOS
      })
      .valueChanges.pipe(
        map(({ data }) => this.getVisibleTodos(data.todos, data.visibilityFilter))
      );
  }

  private getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }
}
