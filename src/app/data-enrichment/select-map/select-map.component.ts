import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-select-map',
  imports: [FormsModule, CommonModule],
  templateUrl: './select-map.component.html',
  styleUrl: './select-map.component.css'
})
export class SelectMapComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  selectedOption: string = '';
  mdmiMap: string = '';
  files: string = '';
  options: { value: any, label: any, isSelected: boolean }[] | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.mdmiMap = params['mdmiMap'] || '';
    });

    if (this.mdmiMap) {
      this.options = [
        { value: this.mdmiMap, label: this.mdmiMap, isSelected: false }
      ];
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.files = inputElement.files[0].name;
      if (this.options) {
        this.options.push({ value: this.files, label: this.files, isSelected: false });
      } else {
        this.options = [
          { value: this.files, label: this.files, isSelected: false }
        ];
      }
    }
  }

  selectOption(option: any) {
    if (this.options) {
      this.options.forEach(op => op.isSelected = false);
    }
    this.selectedOption = option.value;
  }

  isOneSelected(): boolean {
    if (this.options) {
      return this.options.filter(option => option.isSelected).length === 1;
    }
    return false;
  }

  nextStep(): void {
    this.router.navigate(['/data-enrichment/mapping-enhancement'], {
      queryParams: {
        selectedMap: this.selectedOption
      }
    });
  }
}
