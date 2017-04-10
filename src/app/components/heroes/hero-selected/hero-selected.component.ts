import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../../../core/model/hero.model";

@Component({
  selector: 'hero-selected',
  templateUrl: './hero-selected.component.html',
  styleUrls: ['./hero-selected.component.css']
})
export class HeroSelectedComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  goToDetail() {

  }

}
