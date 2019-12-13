import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})

export class LayoutModule { }
