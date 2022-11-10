import { Component } from '@angular/core';
import { DynamicFormService } from '@nx-workspace/common-services';



@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app1';

  constructor(public dynamicFormService:DynamicFormService) {}

}
