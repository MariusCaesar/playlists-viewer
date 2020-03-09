import { SpinnerComponent } from './../shared/spinner/spinner.component';
import { SearchPipe } from './../shared/pipes/search.pipe';
import { CollapsibleComponent } from './../shared/collapsible/collapsible.component';
import { BannerComponent } from './../shared/banner/banner.component';
import { Playlist } from './models/Playlist';
import { PlaylistService } from './service/playlist.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let MockPlaylistService;
  let mockData: Playlist[];

  beforeEach(async(() => {
    MockPlaylistService = jasmine.createSpyObj(['getPlaylistData']);
    TestBed.configureTestingModule({
      declarations: [
        PlaylistComponent,
        BannerComponent,
        CollapsibleComponent,
        SearchPipe,
        SpinnerComponent
      ],
      imports: [BrowserAnimationsModule],
      providers: [
        { provide: PlaylistService, useValue: MockPlaylistService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // arrange
    mockData = [
      {
        id: 'pl.2b0e6e332fdf4b7a91164da3162127b5',
        kind: 'playlist',
        name: 'New Music Daily',
        url: `https://music.apple.com/us/playlist/new-music-daily/
      pl.2b0e6e332fdf4b7a91164da3162127b5?app=music&at=1000l4QJ&ct=330&itscg=
      10000&itsct=330`,
        curator_name: 'Apple Music',
        artwork: `https://is2-ssl.mzstatic.com/image/thumb/
      Features124/v4/e0/66/8f/e0668f7a-20fd-a97a-81bf-24ad8acf8e45/source/600x600cc.jpg`
      },
      {
        id: 'pl.f4d106fed2bd41149aaacabb233eb5eb',
        kind: 'playlist',
        name: `Today's hits`,
        url: `https://music.apple.com/us/playlist/todays-hits/
        pl.f4d106fed2bd41149aaacabb233eb5eb?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330`,
        curator_name: 'Apple Music Pop',
        artwork: `https://is1-ssl.mzstatic.com/image/thumb/
        Features117/v4/94/17/2e/94172e16-e5d7-2d2b-66ec-e72473988168/source/600x600cc.jpg`
      }
    ];
    (MockPlaylistService.getPlaylistData as jasmine.Spy)
      .and.returnValue(of(mockData));
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get playlist data', () => {
    // act
    fixture.detectChanges();
    // assert
    expect(component.playlists).toBe(mockData);
    expect(component.loading).toBeFalsy();
  });

});
