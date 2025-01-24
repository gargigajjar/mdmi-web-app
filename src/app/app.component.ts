import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateServiceComponent } from './create-service/create-service.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateServiceComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<app-create-service></app-create-service>'
})
export class AppComponent {
  title = 'mdmi-web-app';
}
