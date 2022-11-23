import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '@nx-workspace/common-services';
import { DynamicFormComponent } from '@nx-workspace/ui';



@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'app1';
  @ViewChild(DynamicFormComponent) dynamicFormComponent!: DynamicFormComponent;
  formGroup!: FormGroup;

  constructor(public dynamicFormService: DynamicFormService, private changeDetectorRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.init();
  }

  async init() {
    const  fields = Array.from(new Array(8),(val,index)=> "field" + (index+1) );
    console.log(fields);
    this.formGroup = await this.dynamicFormService.buildForm();
    this.dynamicFormComponent.showForm(this.formGroup,fields);
    this.changeDetectorRef.detectChanges();
  }

}

