import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.css'
})
export class CreateServiceComponent {
  ServiceName: string = '';
  ServiceVersion: string = '';
  FHIRR4JSON: boolean = false;
  CCDAR2: boolean = false;
  HL7V2: boolean = false;
  X12278: boolean = false;
  csv: boolean = false;
  sql: boolean = false;
  submitted: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.selectedMapsNumber < 2) {
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

  getSelectedMaps(): string { 
    let selectedItems = this.selectedMapNames;
    return selectedItems.length > 0 ? selectedItems.join(', ') + '' : 'No checkboxes selected';
  }

  get selectedMapsNumber(): number {
    return this.selectedMapNames.length;
  }

  get selectedMapNames(): string[] {
    let selectedItems = [];

    if (this.FHIRR4JSON) {
      selectedItems.push('FHIR R4 Json');
    }
    if (this.CCDAR2) {
      selectedItems.push('CCDA 2.1 xml');
    }
    if (this.HL7V2) {
      selectedItems.push('HL7 V2.8 txt');
    }
    if (this.X12278) {
      selectedItems.push('X12 278 edi');
    }
    if (this.csv) {
      selectedItems.push('CSV Students csv');
    }
    if (this.sql) {
      selectedItems.push('SQL InsertStatement txt');
    }

    return selectedItems;
  }
}
