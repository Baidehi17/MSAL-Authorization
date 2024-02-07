import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { RoleGuardService } from 'src/app/shared/models/services/role-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [
      MsalGuard,
      RoleGuardService
    ],
    data: {
      expectedRole: 'candidate.ReadWrite'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
