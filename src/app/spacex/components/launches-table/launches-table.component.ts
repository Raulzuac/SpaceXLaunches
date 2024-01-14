import { Component, Input } from '@angular/core';
import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'app-launches-table',
  templateUrl: './launches-table.component.html',
  styleUrl: './launches-table.component.css'
})
export class LaunchesTableComponent {

  @Input()
  launches:Launch[]=[];




}
