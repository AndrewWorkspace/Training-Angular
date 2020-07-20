import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchItem: string = ''): any[] {
    if (!searchItem) return items;
    if (!items) return [];

    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchItem.toLowerCase());
      });
    });
  }

}
