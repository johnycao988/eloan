import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.router';

import { RootComponent } from './root';
import { CNPeopelViewComponent, CNPeopelService } from './chinese';
import { HeroViewComponent, HeroService } from './heroes';

@NgModule({
  declarations: [
    RootComponent,
    HeroViewComponent,
    CNPeopelViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [HeroService, CNPeopelService],
  bootstrap: [RootComponent]
})
export class AppModule { }
