import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  animations: [
    [
      [
        trigger('openState', [
          state('closed', style({
            height: '0px',
            opacity: '0'
          })),
          state('open', style({
            height: '100px',
            opacity: '1'
          })),
          transition('open <=> closed', animate('250ms cubic-bezier(0, 0, 0.2, 1)')),
        ])
      ]
    ]
  ]
})
export class CollapsibleComponent {
  openState = 'closed';

  @Input() set trigger(value) {
    if (value === undefined) { return; }
    this.openState = value ? 'open' : 'closed';
  }

}
