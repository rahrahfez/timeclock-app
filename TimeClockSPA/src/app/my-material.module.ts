import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule
 } from '@angular/material/';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
  ]
})
export class MyMaterialModule { }
