import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TileComponent } from './tile/tile.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavComponent, TileComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    NavComponent,
    TileComponent
  ]
})
export class SharedModule { }
