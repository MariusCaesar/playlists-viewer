import { Playlist } from './Playlist';

export interface FeaturedPlaylist {
    featuredPlaylist: {
        name: string;
        content: Playlist[];
    };
}

