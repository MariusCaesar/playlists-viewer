import { Playlist } from './../models/Playlist';
import { FeaturedPlaylists } from './../models/FeaturedPlaylist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistData(): Observable<Playlist[]> {
    return this.http.get('https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json').pipe(
      map((data: FeaturedPlaylists) => data.featuredPlaylists.content),
      catchError((error) => {
          return of(error.status);
      })
    );
  }
}
