import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <p>
        <label>Ranking Position: </label><b>{{hero.id}}</b>
      </p>
      <p>
        <label>Name: </label><br>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </p>
	  <p>
        <label>Salary: </label><br>
        <input [(ngModel)]="hero.salary" placeholder="salary"/>
      </p>
	  <p>
        <label>Title: </label><br>
        <input [(ngModel)]="hero.title" placeholder="title"/>
      </p>
	  <p>
        <label>Resume: </label><br>
        <textarea rows=5 cols=60 [(ngModel)]="hero.resume" placeholder="resume"></textarea>
      </p>
    </div>
  `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
