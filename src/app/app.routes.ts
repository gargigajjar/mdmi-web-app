import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { MdmiImportComponent } from './mdmi-import/mdmi-import.component';
import { DataEnrichmentComponent } from './data-enrichment/data-enrichment.component';
import { SelectMapComponent } from './data-enrichment/select-map/select-map.component';
import { MappingEnhancementComponent } from './data-enrichment/mapping-enhancement/mapping-enhancement.component';

export const routes: Routes = [
  { path: '', component: CreateServiceComponent }, // Default route
  { path: 'service-test', component: ServiceTestComponent }, // Route for result page
  { path: 'mdmi-import', component: MdmiImportComponent }, // Route for import page
  {
    path: 'data-enrichment', component: DataEnrichmentComponent, children: [
      { path: 'select-map', component: SelectMapComponent },
      { path: 'mapping-enhancement', component: MappingEnhancementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
