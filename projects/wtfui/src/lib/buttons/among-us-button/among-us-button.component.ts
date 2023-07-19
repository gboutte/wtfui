import {Component, Input} from '@angular/core';

@Component({
  selector: 'wtf-among-us-button',
  templateUrl: './among-us-button.component.html',
  styleUrls: ['./among-us-button.component.scss']
})
export class AmongUsButtonComponent {
  @Input() type: "submit" | "reset" | "button" = "button";
  @Input() disabled: boolean = false;
  @Input() color: 'yellow' | 'red' | 'blue' | 'green' | 'lime' | 'pink' = 'yellow';
  @Input() crewmateColor: 'yellow' | 'red' | 'blue' | 'green' | 'lime' | 'pink' = 'red';
  @Input() initialText: string = 'Play';
  @Input() hoverText: string = 'Now!';

  //Design by barisdogansutcu
  //src: https://uiverse.io/barisdogansutcu/big-moose-69

  getCrewmateClass() {
    return `crewmate-${this.crewmateColor}`;
  }

}
