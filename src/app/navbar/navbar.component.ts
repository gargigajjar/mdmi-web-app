import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  
  createService(){
    this.router.navigate(['/']);
  }

  importMDMI(){
    this.router.navigate(['/mdmi-import']);
  }
}
