import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: unknown, search: string, replaceWith: string): unknown {
    return value.toString().replace(search, replaceWith);
  }

}
