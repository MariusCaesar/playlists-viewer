import { Playlist } from './models/Playlist';
import { PlaylistService } from './service/playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  test = [1, 2, 3, 4, 5, 6, 7];
  playlists: Playlist[];

  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.service.getPlaylistData().subscribe(playlists => {
      console.log({ playlists });
        // this.playlists = playlists;
    });
  }

}
