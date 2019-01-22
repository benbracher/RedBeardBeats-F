import { SideNavComponent } from './../side-nav/side-nav.component';
import { MatDialogRef } from '@angular/material';
import { ReloadService } from './../../services/reload.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginForm: FormGroup;
  constructor(private _form: FormBuilder, private _authService: AuthService, private dialogRef: MatDialogRef<SideNavComponent>) { 
    this.createForm();

  }

  ngOnInit() {
  }
  createForm(){
    this._loginForm = this._form.group({
      username: new FormControl,
      password: new FormControl,
    });
  }

  onSubmit(){

    console.log(this._loginForm.value);
    this._authService.login(this._loginForm.value);
    this.dialogRef.close();

  }
}