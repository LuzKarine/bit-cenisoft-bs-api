import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/*import { ClientsService } from '../../services/clients.service';*/
const swal = require('sweetalert');

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    /*private clientsService: ClientsService*/
  ) {
    this.signUpForm = this.formBuilder.group({
      name:['', Validators.required],
      address:['', Validators.required],
      mobile:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Se esta enviando....')
    if (this.signUpForm.valid){
      this.signUpForm.value;
      /*this.clientsService.signUp(this.signUpForm.value)
      .subscribe(
        (client) =>{
          console.log('client', client)
        },
        (error)=>{
          alert('No se pudo registrar el cliente');
          console.error('Error creating client: ', error);
        }
      )*/
      swal('success', 'Guardado exitoso')
    }
    else{
      swal('Error', 'Debes completar todos los campos')
      document.getElementById('sign-up-form').classList.add('was-validated');
    }
  }

}
