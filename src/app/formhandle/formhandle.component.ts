import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formhandle',
  templateUrl: './formhandle.component.html',
  styleUrls: ['./formhandle.component.css'],
})
export class FormhandleComponent {
  Form!: FormGroup;
  submitted!: Boolean;
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit() {
    this.Form = this.formbuilder.group({
      firstname: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(10)],
        },
      ],
      lastname: ['', { validators: [Validators.required] }],
      email: ['', [Validators.required, validateEmail]],
    });
  }
}

function validateEmail(c: FormControl): any {
  let emailregex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return emailregex.test(c.value)
    ? null
    : {
        emailInvalid: {
          message: 'Invalid Format',
        },
      };
}
