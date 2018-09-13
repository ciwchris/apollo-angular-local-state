import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
    <p>
      Show:
      <filter-link filter="SHOW_ALL">All</filter-link>,
      <filter-link filter="SHOW_ACTIVE">Active</filter-link>,
      <filter-link filter="SHOW_COMPLETED">Completed</filter-link>
    </p>
  `
})
export class FooterComponent {}
