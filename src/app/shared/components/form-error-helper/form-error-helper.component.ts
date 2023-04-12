import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-helper',
  templateUrl: './form-error-helper.component.html',
  styleUrls: ['./form-error-helper.component.scss']
})
export class FormErrorHelperComponent {

  @Input()
  formErrors: any;
}
