import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'nx-workspace-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [DynamicFormService],
})
export class DynamicFormComponent {
  formGroup!: FormGroup;
  ready = false;
  fields!: string[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  showForm(formGroup: FormGroup,fields:string[]) {
    this.fields=fields;
    this.formGroup = formGroup;
    this.ready = true;
    this.changeDetectorRef.detectChanges();
  }
}
