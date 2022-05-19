import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpModuleComponent } from './emp-module.component';
import { EntryComponent } from './entry/entry.component';

import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [{ path: '', component: EmpModuleComponent }, 
{ path: 'dashboard', component: DashboardComponent },
{path: 'entry', component : EntryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatFormFieldModule],
  exports: [RouterModule]
})
export class EmpModuleRoutingModule { }
