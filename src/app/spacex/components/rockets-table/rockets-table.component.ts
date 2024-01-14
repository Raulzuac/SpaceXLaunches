import { Component, Input } from '@angular/core';
import { Rocket } from '../../interfaces/rocket';

@Component({
  selector: 'app-rockets-table',
  templateUrl: './rockets-table.component.html',
  styleUrl: './rockets-table.component.css'
})
export class RocketsTableComponent {

  @Input()
  rockets:Rocket[] = []



}
