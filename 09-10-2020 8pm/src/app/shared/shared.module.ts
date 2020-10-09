import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatExpansionModule,
  ],
})
export class SharedModule { }
