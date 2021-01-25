import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public toast: boolean = false;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(55)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required],
      date: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(55),
        Validators.required
      ])]
    })
  }

  makeToast() {
    this.toast = true;
  }


}
