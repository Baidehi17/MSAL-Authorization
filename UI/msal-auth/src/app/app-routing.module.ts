import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'customers', canActivate: [MsalGuard],
    loadChildren: () =>
      import('./../app/modules/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'candidates', canActivate: [MsalGuard],
    loadChildren: () => import('./../app/modules/candidate/candidate.module').then((m) => m.CandidateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
