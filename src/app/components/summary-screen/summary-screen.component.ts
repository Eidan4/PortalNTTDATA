import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-screen',
  templateUrl: './summary-screen.component.html',
  styleUrls: ['./summary-screen.component.css'],
})
export class SummaryScreenComponent implements OnInit {
  clientData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('clientData');
    if (data) {
      this.clientData = JSON.parse(data);
    } else {
      alert('No hay datos disponibles.');
      this.router.navigate(['/']); // Redirige al formulario si no hay datos
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Regresa al formulario
  }
}