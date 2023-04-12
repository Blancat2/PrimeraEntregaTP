import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    FormErrorHelperModule,
    DirectivesModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
