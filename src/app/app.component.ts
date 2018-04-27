import {Component, OnInit} from "@angular/core";
import { environment } from 'environments/environment';
import { Restaurants } from './restaurants';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!';
  todos: Restaurants[] = [];

  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  constructor(
    private http: Http
  ) {
  }


  public ngOnInit() {
    this.getAllRestaurants()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }



  public getAllRestaurants(): Observable<Restaurants[]> {
    return this.http
      .get(API_URL + '/restaurants')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Restaurants(todo));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('AppComponent::handleError', error);
    return Observable.throw(error);
  }

}
