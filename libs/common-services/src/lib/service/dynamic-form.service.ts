import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  async buildForm(): Promise<FormGroup> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
          field1: new FormControl(''),
          field2: new FormControl(''),
          field3: new FormControl(''),
          field4: new FormControl(''),
          field5: new FormControl(''),
          field6: new FormControl(''),
          field7: new FormControl(''),
          field8: new FormControl(''),
          // field9: new FormControl(''),
          // field10: new FormControl(''),
          // field11: new FormControl(''),
          // field12: new FormControl(''),
          // field13: new FormControl(''),
          // field14: new FormControl(''),

        }))
      }, 1000);
    })
  }
}