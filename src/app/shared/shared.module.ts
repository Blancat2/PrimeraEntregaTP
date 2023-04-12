import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { FontSizeDirective } from './directives/font-size.directive';



@NgModule({
  declarations: [
    FontSizeDirective
  ],
  imports: [
    CommonModule,
    PipesModule,
  ]
})
export class SharedModule { }
