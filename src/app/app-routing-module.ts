import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LogisticsGuard } from './guards/logistics.gaurd';
 
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logistics',
    loadChildren: () => import('./logistics/logistics.module').then(m => m.LogisticsModule),
    canActivate: [LogisticsGuard]
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 