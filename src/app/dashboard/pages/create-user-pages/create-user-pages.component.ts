import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Form } from '../../interfaces/form.interface';
import { RegExpValidation } from '../../../shared/regex/regex';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-user-pages',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './create-user-pages.component.html',
  styleUrl: './create-user-pages.component.css',
})
export class CreateUserPagesComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(RegExpValidation.email),
    ]),
    age: new FormControl<number>(0, [
      Validators.required,
      Validators.min(18),
      Validators.max(100),
      Validators.pattern(RegExpValidation.onlyNumbers),
    ]),
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
