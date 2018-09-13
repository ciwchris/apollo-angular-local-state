import { Component, OnInit, Input } from '@angular/core';
import { gql, Apollo } from 'apollo-angular-boost';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Query } from './generated/graphql';
const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

@Component({
  selector: 'filter-link',
  template: `
    <button (click)="setFilter()" [disabled]="(visibilityFilter | async) === filter">
      <ng-content></ng-content>
    </button>
  `
})
export class FilterLinkComponent implements OnInit {
  @Input()
  filter: string;
  visibilityFilter: Observable<string>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.visibilityFilter = this.apollo
      .watchQuery<Query>({
        query: GET_VISIBILITY_FILTER
      })
      .valueChanges.pipe(map(result => result.data && result.data.visibilityFilter));
  }

  setFilter() {
    this.apollo.getClient().writeData({
      data: { visibilityFilter: this.filter }
    });
  }
}
