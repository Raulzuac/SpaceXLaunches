import { Component } from '@angular/core';
import { RocketsService } from '../../services/rockets.service';
import { Rocket } from '../../interfaces/rocket';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.css'
})
export class RocketsComponent {

  constructor(private service:RocketsService) {
    this.getRockets();
   }

  rockets:Rocket[] = [];

  get Rockets(){
    return this.rockets;
  }

  getHeaviestRocket():string{
    const heaviest =  this.rockets.reduce((prev,curr)=>prev.mass.kg>curr.mass.kg?prev:curr);
    return heaviest.name + ' ' + heaviest.mass.kg + ' kg';
  }

  getRockets(){

    return this.service.getRockets().subscribe(
      data=>{
        this.rockets=data;
      }
    )
  }
}
