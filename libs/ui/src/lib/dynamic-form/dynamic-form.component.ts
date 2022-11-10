import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicFormService } from '@nx-workspace/common-services';


@Component({
  selector: 'nx-workspace-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  // providers: [DynamicFormService],
})
export class DynamicFormComponent implements OnInit {
  constructor(public dynamicFormService:DynamicFormService) {}

  ngOnInit(): void {
    this.dynamicFormService.buildForm();
  }
}
