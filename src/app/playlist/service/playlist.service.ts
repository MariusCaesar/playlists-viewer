import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistData(): Observable<any> {
    return this.http.get('https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json')
  }
}
