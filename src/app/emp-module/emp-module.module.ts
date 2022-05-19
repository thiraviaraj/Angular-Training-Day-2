import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpModuleRoutingModule } from './emp-module-routing.module';
import { EmpModuleComponent } from './emp-module.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmpModuleComponent,
    DashboardComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    EmpModuleRoutingModule,
    SharedModule
  ]
})
export class EmpModuleModule { }
