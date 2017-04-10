import {Injectable} from "@angular/core";
import {Hero} from "../model/hero.model";
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    console.log('getting heroes');
    return this.http.get(this.heroesUrl)
      .map(res => res.json().data || []);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Hero);
  }

  delete(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url)
      .map(() => null);
  }

  create(name: string): Observable<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .map(res => res.json().data as Hero);
  }

  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .map(() => hero);
  }

}
