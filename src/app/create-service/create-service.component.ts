import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.css'
})
export class CreateServiceComponent {
  ServiceName: string = '';
  ServiceVersion: string = '';
  Maps = [
    { label: 'FHIR R4 Json', name: 'FHIRR4JSON', checked: false },
    { label: 'CCDA 2.1 xml', name: 'CDAR2', checked: false },
    { label: 'HL7 V2.8 txt', name: 'HL7V2', checked: false },
    { label: 'X12 278 edi', name: 'X12278', checked: false },
    { label: 'CSV Students csv', name: 'CSV', checked: false },
    { label: 'SQL InsertStatement txt', name: 'SQL', checked: false }
  ];

  submitted: boolean = false;
  selectedMaps: string[] = [];
  constructor(private router: Router) {}

  onSubmit() {
    this.updateSelectedMaps();
    if (this.updateSelectedMaps.length < 2) {
      alert('Please select at least two checkboxes.');
      return;
    }
    this.router.navigate(['/service-test'], {
      queryParams: {
        ServiceName: this.ServiceName,
        ServiceVersion: this.ServiceVersion,
        SelectedMaps: JSON.stringify(this.getSelectedMaps()) // Convert array to string
      }
    });
  }

  selectAll() {
    this.Maps.forEach(cb => cb.checked = true);
    this.updateSelectedMaps();
  }

  deselectAll() {
    this.Maps.forEach(cb => cb.checked = false);
    this.updateSelectedMaps();
  }

  updateSelectedMaps(){
    this.selectedMaps = this.Maps
      .filter(cb => cb.checked)
      .map(cb => cb.label);
  }

  getSelectedMaps(): string { 
    this.updateSelectedMaps;
    return this.selectedMaps.length > 0 ? this.selectedMaps.join(', ') + '' : 'No checkboxes selected';
  }

  get selectedMapsNumber(): number {
    return this.selectedMaps.length;
  }

}
