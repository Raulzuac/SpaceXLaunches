import { Component } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';
import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.css'
})
export class LaunchesComponent {

  constructor(private service:LaunchesService) {
    this.getPastLaunches();
    this.getPlannedLaunches();
   }

  pastLaunches:Launch[]=[];
  plannedLaunches:Launch[]=[];

  get PastLaunches(){
    return this.pastLaunches;
  }
  get PlannedLaunches(){
    return this.plannedLaunches;
  }

  getPastLaunches(){
    return this.service.getPastLaunches().subscribe(
      data=>{
        this.pastLaunches=data;
      }
    )
  }

  getPlannedLaunches(){
    return this.service.getPlannedLaunches().subscribe(
      data=>{
        this.plannedLaunches=data;
      }
    )
  }

}
