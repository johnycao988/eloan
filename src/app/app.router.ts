import { Routes } from '@angular/router';
import { HeroViewComponent } from './heroes';
import { CNPeopelViewComponent } from './chinese';
export const APP_ROUTES: Routes = [
{ path: 'heroes', component: HeroViewComponent },
{ path: 'chinese', component: CNPeopelViewComponent }
];
