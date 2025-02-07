import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-mapping-enhancement',
  imports: [FormsModule, CommonModule],
  templateUrl: './mapping-enhancement.component.html',
  styleUrl: './mapping-enhancement.component.css'
})
export class MappingEnhancementComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  dropdownOptions = [
    ['Allergy', 'Claim', 'Condition', 'Encounter', 'Immunization', 'Location',
    'Medication', 'Observation', 'Organization', 'Patient', 'Practitioner',
    'Procedure', 'RelatedPerson'],
    ['Address', 'Code', 'DateTime', 'Identifier', 'Name', 'Quantity', 'Telecom'],
    ['Birth', 'Category', 'Death', 'End', 'Ethnicity', 'Race', 'Start', 'Status', 'Type']
  ];

  mapName: string = '';
  context: string = '';
  value: string = '';
  role: string = '';
  rowNum: number = -1;

  rows: any[] = [
    { row: 'Patient_Id', data: '1234', status: null, context: 'Patient', value: 'Identifier', role: '' },
    { row: 'Birth_Date', data: '10/20/2022', status: null, context: 'Patient', value: 'DateTime', role: 'Birth' },
    { row: 'Race', data: 'White', status: null, context: 'Patient', value: 'Code', role: 'Race' },
    { row: 'Name', data: 'Emma', status: null, context: '', value: 'Name', role: '' },
    { row: 'Sexual Orientation', data: 'Unknown', status: null, context: 'Observation', value: 'Code', role: 'Type' },
    { row: 'Date of Service', data: '02/06/2025', status: null, context: 'Encounter', value: 'DateTime', role: '' },
    { row: 'Assigned Provider', data: 'Maya Doodle', status: null, context: 'Practitioner', value: '', role: '' },
    { row: 'Insurance Name', data: 'Dogs are great', status: null, context: 'Organization', value: 'Name', role: '' },
    { row: 'Enrollment Status', data: 'enrolled', status: null, context: 'Observation', value: 'Code', role: 'Type' },
    { row: 'Diagnosis 1', data: '689989', status: null, context: 'Condition', value: 'Code', role: 'Type' },
    { row: 'Diagnosis 2', data: '896587', status: null, context: 'Condition', value: 'Code', role: 'Type' },
    { row: 'Diagnosis 3', data: '656808', status: null, context: 'Condition', value: 'Code', role: 'Type' },
    { row: 'Provider Type', data: 'PCP', status: null, context: 'Practitioner', value: 'Code', role: 'Type' }
  ];

  currentStep = 0;
  questions = [
    "Who or what this data is about?",
    "What type of information does this data represent?",
    "What specific detail or property of the entity does this data capture? (Select Blank if this does not apply)"
  ];
  answers: string[] = ["", "", ""];
  modalInstance: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.mapName = params['selectedMap'] || '';
    });
  }

  approveAll(){
    this.rows.forEach((row) => {
      row.status = true;
    });
  }

  approveRow(row: number) {
    this.rows[row].status = true;
  }

  disapproveRow(row: number) {
    this.rows[row].status = false;
  }

  isApproved(row: number) {
    return this.rows[row].status;
  }

  isDisapproved(row: number) {
    if (this.rows[row].status == false) {
      return true;
    }
    return false;
  }

  selectedAll() {
    let flag: boolean = true;
    this.rows.forEach((row) => {
      if (row.status == null) {
        flag = false;
      }
    });
    return flag;
  }

  openPopup(row: number) {
    this.rowNum = row;
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement);
      this.modalInstance.show();
    }
  }

  closePopup() {
    if (this.modalInstance) {
      this.modalInstance.hide(); // Hide the modal
    }
    this.answers = ["", "", ""];
    this.currentStep = 0;
  }

  nextStep() {
    if (this.currentStep < this.questions.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submitAnswers() {
    if(this.rowNum != -1){
      this.rows[this.rowNum].context = this.answers[0];
      this.rows[this.rowNum].value = this.answers[1];
      this.rows[this.rowNum].role = this.answers[2];
    }
    this.closePopup(); 
    this.approveRow(this.rowNum);
  }

}
