import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CindyFrameworkModule } from 'ngx-cindy';
import { EditorModule } from '@tinymce/tinymce-angular';

const COMPONENTS = [];

const THIRDS = [
  NgZorroAntdModule,
  CindyFrameworkModule,
  EditorModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRDS,
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...THIRDS,
    ...COMPONENTS,
  ],
})
export class SharedModule { }
