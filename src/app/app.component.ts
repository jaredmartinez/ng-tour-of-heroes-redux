import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes Application';

  constructor(public _router: Router) { }

  navigateTo(url: String) {
    this._router.navigate([url]);
  }
}
