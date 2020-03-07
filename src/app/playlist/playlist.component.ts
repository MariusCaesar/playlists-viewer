import { Playlist } from './models/Playlist';
import { PlaylistService } from './service/playlist.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }),
            stagger('150ms', animate('600ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        ),
        query(':leave',
          animate('200ms', style({ opacity: 0 })),
          { optional: true }
        )
      ])
    ])
  ]
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  loading = false;
  searching = false;
  term = '';

  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getPlaylistData().subscribe(playlists => {
        this.playlists = playlists;
        this.loading = false;
    });
  }

}
