import {Component, Input} from '@angular/core';

@Component({
  selector: 'wtf-square3d-button',
  templateUrl: './square3d-button.component.html',
  styleUrls: ['./square3d-button.component.css']
})
export class Square3dButtonComponent {
  @Input() type: string = "button";
  @Input() disabled: boolean = false;
  @Input() baseColor: 'yellow' = 'yellow';
  @Input() color: 'red' = 'red';

  //design by r7chardgh
  //src: https://uiverse.io/r7chardgh/ancient-starfish-5
}
