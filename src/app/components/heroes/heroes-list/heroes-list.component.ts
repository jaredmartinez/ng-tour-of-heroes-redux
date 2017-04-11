import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from "../../../core/model/hero.model";

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() onSelect = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectHero(id: number) {
    this.onSelect.emit(id);
  }

  deleteHero(id: number) {
    this.onDelete.emit(id);
  }

}
