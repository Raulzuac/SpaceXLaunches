import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexRoutingModule } from './spacex-routing.module';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchesTableComponent } from './components/launches-table/launches-table.component';

import { PrimengModule } from '../primeng/primeng.module';
import { RocketsTableComponent } from './components/rockets-table/rockets-table.component';
import { LaunchComponent } from './pages/launch/launch.component';


@NgModule({
  declarations: [
    LaunchesComponent,
    RocketsComponent,
    LaunchesTableComponent,
    RocketsTableComponent,
    LaunchComponent
  ],
  imports: [
    CommonModule,
    SpacexRoutingModule,
    PrimengModule
  ]
})
export class SpacexModule { }
