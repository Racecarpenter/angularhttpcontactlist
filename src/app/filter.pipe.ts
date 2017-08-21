import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  console.log('this is the value: ', value);
  console.log('these are the args: ', args)
  return value.filter(item => item.includes(args));
  }

}
