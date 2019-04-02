import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule
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
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class MyMaterialModule { }
