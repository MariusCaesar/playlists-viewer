import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  test = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

}
