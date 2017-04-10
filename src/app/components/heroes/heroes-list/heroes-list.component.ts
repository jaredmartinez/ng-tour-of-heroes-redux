import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../../../core/model/hero.model";

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
