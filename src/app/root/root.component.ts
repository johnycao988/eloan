import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <h1>{{title}}</h1>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/chinese">Chinese</a>
     <router-outlet></router-outlet>
   `
})

export class RootComponent {
  title = 'My Angular App';
}
