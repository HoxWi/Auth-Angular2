import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
	
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'https://hoxwi.com/Wi/AngularJS/candidate-list';  // URL to web api
  
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.put(this.heroesUrl, {}, {headers: this.headers})
               .toPromise()
               .then(response => response.json().results as Hero[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
