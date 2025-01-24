import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-test',
  imports: [],
  templateUrl: './service-test.component.html',
  styleUrl: './service-test.component.css'
})
export class ServiceTestComponent implements OnInit{
  ServiceName: string = '';
  ServiceVersion: string = '';
  SelectedMaps: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ServiceName = params['ServiceName'] || '';
      this.ServiceVersion = params['ServiceVersion'] || '';
      this.SelectedMaps = params['SelectedMaps'] ? JSON.parse(params['SelectedMaps']) : [];
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
