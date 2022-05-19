import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: 'adminModule', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) },
{ path: 'empModule', loadChildren: () => import('./emp-module/emp-module.module').then(m => m.EmpModuleModule) },
{ path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
