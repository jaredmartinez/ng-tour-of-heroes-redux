import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../../../core/model/hero.model";

@Component({
  selector: 'hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.css']
})
export class HeroSelectorComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
