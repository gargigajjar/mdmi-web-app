import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mdmi-import',
  imports: [FormsModule, CommonModule],
  templateUrl: './mdmi-import.component.html',
  styleUrl: './mdmi-import.component.css'
})
export class MdmiImportComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  selectedFile: File | null = null;
  mapName: string = '';
  fileError: boolean = false;


  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.mapName = this.selectedFile.name.split(".")[0] + ".mdmi";
      this.fileError = !this.isMdmiFile(); 
    } else {
      this.selectedFile = null;
      this.mapName = '';
      this.fileError = false;
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  isMdmiFile(): boolean {
    const regex = /\.mdmi$/i; // Case insensitive check for '.mdmi' at the end
    return regex.test(this.mapName);
  }

  onTextInput(){
    if(this.isMdmiFile()){
      this.fileError = false;
    }
  }

  onSubmit(){
    if (!this.selectedFile || !this.isMdmiFile()) {
      this.fileError = true; // Show error if file is invalid or not selected
      return;
    }
    console.log('File Selected:', this.mapName);
  }
}
