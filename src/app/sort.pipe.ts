import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args?: any[]): any[] {
    if (args === 'name') {
    }
    return 1;
  }
}
