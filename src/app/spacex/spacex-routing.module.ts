import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { LaunchComponent } from './pages/launch/launch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'rockets',
        component: RocketsComponent
      },
      {
        path: 'launches',
        component: LaunchesComponent
      },
      {
        path:'launch/:identifier',
        component: LaunchComponent
      },
      {
        path: '**',
        redirectTo: 'launches'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacexRoutingModule { }
