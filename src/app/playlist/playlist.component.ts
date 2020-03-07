import { PlaylistService } from './service/playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  test = [1, 2, 3, 4, 5, 6, 7];

  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.service.getPlaylistData().subscribe(data => {
      console.log({data});
    });
  }

}
