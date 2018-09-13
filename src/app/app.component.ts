import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <div>
      <todo-form></todo-form>
      <todo-list></todo-list>
      <footer></footer>
    </div>
  `
})
export class AppComponent {}
