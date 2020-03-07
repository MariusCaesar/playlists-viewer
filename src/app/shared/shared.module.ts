import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TileComponent } from './tile/tile.component';
import { MatCardModule } from '@angular/material/card';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { BannerComponent } from './banner/banner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    NavComponent,
    TileComponent,
    SpinnerComponent,
    CollapsibleComponent,
    BannerComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    NavComponent,
    TileComponent,
    SpinnerComponent,
    BannerComponent,
    CollapsibleComponent,
    SearchPipe
  ]
})
export class SharedModule { }
