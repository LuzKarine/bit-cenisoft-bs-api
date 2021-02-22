import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
const swal = require('sweetalert');

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) { 
    this.signInForm = this.formBuilder.group({     
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log('Se esta enviando....')
    if (this.signInForm.valid){
      this.signInForm.value;
           
    }
    else{
      swal('Error', 'Debe completar todos los datos')
      document.getElementById('sign-up-form').classList.add('was-validated');
    }
  }
}
