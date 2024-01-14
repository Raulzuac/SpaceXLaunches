import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items!: MenuItem[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Launches',
        icon: 'pi pi-calendar',
        routerLink: '/spacex/launches'
      },
      {
        label: 'Rockets',
        icon: 'pi pi-wrench',
        routerLink: '/spacex/rockets'
      }
    ]
  }
}
