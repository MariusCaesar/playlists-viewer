import { Playlist } from './../../playlist/models/Playlist';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: Playlist[], args: string): unknown {
    if (!args.length) { return values; }

    return values.filter((playlist) => {
      return playlist.name.toLocaleLowerCase().includes(args.toLowerCase());
    });

  }

}
