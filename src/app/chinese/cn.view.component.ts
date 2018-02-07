import { Component, Input, OnInit} from '@angular/core';
import { CNPeopel } from './cn';
import { CNPeopelService } from './cn.service';

@Component({
  selector: 'app-cn',
  styleUrls: ['./cn.style.css'],
  template: `
    <h2>Chinese Peopel</h2>
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
export class CNPeopelViewComponent implements OnInit {
  @Input() hero: CNPeopel;
  heroes: CNPeopel[];
  selectedHero: CNPeopel;
  constructor(private heroService: CNPeopelService) { }

  onSelect(hero: CNPeopel): void {
    this.selectedHero = hero;
  }

    ngOnInit(): void {
   this.heroes = this.heroService.getHeroes();
  }
}
