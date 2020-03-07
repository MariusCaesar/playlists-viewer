import { Playlist } from './models/Playlist';
import { PlaylistService } from './service/playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  loading = false;

  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getPlaylistData().subscribe(playlists => {
        // this.playlists = playlists;
        this.loading = false;
    });
  }

}
