import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../services/backend/backend.service';

@Component({
  selector: 'app-input-screen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './input-screen.component.html',
  styleUrls: ['./input-screen.component.css'],
})
export class InputScreenComponent {
  _form: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backendService: BackendService
  ) {
    this._form = this.fb.group({
      docType: ['', Validators.required],
      docNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern(/^\d+$/), // Solo números
        ],
      ],
    });
  }

  search(): void {
    if (this._form.valid) {
      this.isLoading = true;
      const { docType, docNumber } = this._form.value;

      this.backendService.getClientData(docType, docNumber).subscribe({
        next: (data) => {
          if (data) {
            localStorage.setItem('clientData', JSON.stringify(data));
            this.router.navigate(['/summary']);
          } else {
            alert('No se encontraron datos para este cliente.');
          }
        },
        error: (err) => {
          console.error('Error al obtener los datos del cliente:', err);
          alert('No se pudo obtener la información del cliente. Verifique los datos ingresados.');
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
      this.isLoading = false;
    }
  }
}
