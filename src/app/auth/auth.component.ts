import { Component, inject } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder);
}
