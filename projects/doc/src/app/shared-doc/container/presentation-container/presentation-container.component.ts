import {Component, Input} from '@angular/core';

@Component({
  selector: 'wtd-presentation-container',
  templateUrl: './presentation-container.component.html',
  styleUrls: ['./presentation-container.component.scss']
})
export class PresentationContainerComponent {
  @Input() title!: string;
}
