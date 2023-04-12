import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  title = 'Forms-Blancat';
  formularioForm: FormGroup;
  

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),

    ]
  );


  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
    ]
  )
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(10),
    ]
  )




  constructor() {
    this.formularioForm = new FormGroup ({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    })
  }


  onSubmit(): void{
  
    if(this.formularioForm.valid){
      console.log(this.formularioForm.value)
    } else {
      alert ('no es valido');
    } 
  }
}
