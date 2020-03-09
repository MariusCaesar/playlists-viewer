import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('PlaylistService', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaylistService,
        {
          provide: HttpClient, useValue: HttpClientTestingModule
        }
      ]
    });
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
