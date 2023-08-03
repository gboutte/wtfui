import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'wtd-rocker-switch-example',
  templateUrl: './rocker-switch-example.component.html',
  styleUrls: ['./rocker-switch-example.component.scss']
})
export class RockerSwitchExampleComponent {
  formControlCheckbox: FormControl = new FormControl<boolean>(false);

  constructor() {
    this.formControlCheckbox.valueChanges.subscribe((value) => {
      this.formControlCheckbox.setValue(value, {emitEvent: false});
    })
  }
}
