import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
