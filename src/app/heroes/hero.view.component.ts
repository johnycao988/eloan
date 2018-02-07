import { Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  styleUrls: ['./hero.style.css'],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
         <label>id:</label>
        {{hero.id}}
      </div>
       <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroViewComponent implements OnInit {
  @Input() hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

    ngOnInit(): void {
   this.heroes = this.heroService.getHeroes();
  }
}
