import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServiceTestComponent } from './service-test/service-test.component';

export const routes: Routes = [
  { path: '', component: CreateServiceComponent }, // Default route
  { path: 'service-test', component: ServiceTestComponent } // Route for result page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
