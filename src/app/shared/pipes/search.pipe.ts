import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value === undefined) { return args; }

    return args.filter((each: string) => {
      return each.toLowerCase().includes(value.toLowerCase());
    });

  }

}
