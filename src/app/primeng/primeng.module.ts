import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button, ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    CardModule
  ],
  exports:[
    ButtonModule,
    MenubarModule,
    TableModule,
    CardModule
  ]
})
export class PrimengModule { }
