import { Component } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.css'
})
export class LaunchComponent {

  launch?:Launch;

  constructor( private service:LaunchesService,private activeRoute:ActivatedRoute,private router:Router){
    this.activeRoute.params.subscribe(
      ({identifier})=>{
        this.service.getOneLaunch(identifier).subscribe(
          launch => {
            if(!launch){
              this.router.navigateByUrl('');
              return;
            }
            this.launch = launch;
          }
        )
      }
    )
  }
}
