import { Component, Inject, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegExpValidation } from '../../../shared/regex/regex';
import { JsonPipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormUser } from '../../interfaces/form.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-user-pages',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, JsonPipe, RouterModule],
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

  private userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);
  private _router = inject(Router);
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.userService.createUser(this.form.value as FormUser).subscribe({
      next: (user) => {
        this._snackBar.open('Usuario creado correctamente', 'Aceptar', {
          duration: 3000,
        });
        this._router.navigateByUrl('/dashboard/user-list', {
          replaceUrl: true,
        });
      },
      error: (err) => {
        this._snackBar.open('Error al crear usuario', 'Aceptar', {
          duration: 3000,
        });
        console.log(err);
      },
    });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
