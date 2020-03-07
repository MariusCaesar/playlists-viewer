import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() img;
  @Input() link = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(): void {
    window.open(this.link);
  }

}
