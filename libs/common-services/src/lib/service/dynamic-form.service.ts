import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  formGroup!: FormGroup;
  buildForm() {
     this.formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }
}