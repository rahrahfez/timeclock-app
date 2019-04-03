import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule
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
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MyMaterialModule { }
