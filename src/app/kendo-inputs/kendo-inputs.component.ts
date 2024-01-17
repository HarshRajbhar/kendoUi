import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFillMode, InputRounded, InputSize } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-kendo-inputs',
  templateUrl: './kendo-inputs.component.html',
  styleUrls: ['./kendo-inputs.component.scss'],
})
export class KendoInputsComponent {
  form: FormGroup;
  switch_check = false;
  data: { terms: string } = {
    terms: '',
  };

  range_value: [number, number] = [60, 100];
  min = 0;
  max = 200;
  largeStep = 2;
  smallStep = 20;
  textarea_size: InputSize = "medium";
  textarea_rounded: InputRounded = "medium";
  textarea_fillMode: InputFillMode = "solid";

  constructor() {
    this.form = new FormGroup({
      terms: new FormControl(this.data.terms, [Validators.requiredTrue]),
    });
  }
}
