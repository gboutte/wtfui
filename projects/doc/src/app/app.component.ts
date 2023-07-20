import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'wtd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doc';
  formControlCheckbox: FormControl = new FormControl<boolean>(false);

  constructor() {
    this.formControlCheckbox.valueChanges.subscribe((value)=>{
      this.formControlCheckbox.setValue(value, {emitEvent: false});
    })
  }
}
