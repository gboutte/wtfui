import {Component, Input, OnInit, Optional, Self} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl} from "@angular/forms";

@Component({
  selector: 'wtf-rocker-switch',
  templateUrl: './rocker-switch.component.html',
  styleUrls: ['./rocker-switch.component.scss']
})
export class RockerSwitchComponent implements ControlValueAccessor, OnInit {
  @Input() yesLabel: string = 'Yes';
  @Input() noLabel: string = 'No';
  @Input() size: 'small'|'normal' = 'normal';

  // Design by bandirevanth
  // src: https://uiverse.io/bandirevanth/wonderful-dog-56

  formControlCheckbox: FormControl = new FormControl<boolean>(false);

  // The method called when the input is touched
  onTouched = () => {};
  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }
  ngOnInit(): void {
    if (this.ngControl !== null) {
      this.ngControl.control?.statusChanges.subscribe((status) => {
        if (status === 'INVALID') {
          this.formControlCheckbox.setErrors({ incorrect: true });
          this.formControlCheckbox.markAsDirty();
          this.formControlCheckbox.markAsTouched();
        }else{
          this.formControlCheckbox.setErrors(null);
          this.formControlCheckbox.updateValueAndValidity({onlySelf: true, emitEvent: false});
        }
      });
    }
  }
  registerOnChange(fn: any): void {
    this.formControlCheckbox.valueChanges.subscribe((value)=>{
      this.markAsTouched();
      fn(value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  markAsTouched() {
    if (!this.formControlCheckbox.touched) {
      this.onTouched();
      this.formControlCheckbox.markAsTouched();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControlCheckbox.disable()
    } else {
      this.formControlCheckbox.enable()
    }
  }

  writeValue(value: boolean): void {
    this.formControlCheckbox.setValue(value, {emitEvent: false})
  }
}
