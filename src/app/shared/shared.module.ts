import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MenubarModule,
    ButtonModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
