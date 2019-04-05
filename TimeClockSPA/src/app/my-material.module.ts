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
  MatSnackBarModule,
  MatPaginatorModule
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
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class MyMaterialModule { }
