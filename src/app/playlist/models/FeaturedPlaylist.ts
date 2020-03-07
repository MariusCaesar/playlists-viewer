import { Playlist } from './Playlist';

export interface FeaturedPlaylists {
    featuredPlaylists: {
        name: string;
        content: Playlist[];
    };
}

