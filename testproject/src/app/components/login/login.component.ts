import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  login(){
    const email = this.form.value.email;
    const password = this.form.value.password;

    if (email == 'andrea@gmail.com' && password == "1234"){
      // redireccionamos al dashboard
      this.fakeLoading();
    }else{
      // mostramos mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Email or Password are invalid','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  };

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{

      this.router.navigate(['dashboard']);
    }, 1500);
  }
  

}
