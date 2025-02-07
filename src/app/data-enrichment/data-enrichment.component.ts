import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SelectMapComponent } from './select-map/select-map.component';
import { MappingEnhancementComponent } from './mapping-enhancement/mapping-enhancement.component';

@Component({
  selector: 'app-data-enrichment',
  imports: [RouterOutlet],
  templateUrl: './data-enrichment.component.html',
  styleUrl: './data-enrichment.component.css'
})

export class DataEnrichmentComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  selectMap(){
    this.router.navigate(['/data-enrichment/select-map']);
  }

  updateApproveMapping(){
    this.router.navigate(['/data-enrichment/mapping-enhancement']);
  }
}
