import { Pipe, PipeTransform } from '@angular/core';

/*
 *   Capitalizes the firsst character of each word. For caps lock on all characters in a word, use the default pipe 'uppercase' from angular framework. Similarly 'lowercase' for Lowercase
 *
 * */
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {

  transform(value: any) {
      if (!value) return value;

      return value.replace(/\w\S*/g, function(txt:any) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

      /*if (value) {
      	return value.charAt(0).toUpperCase() + value.slice(1);
	  }
	  return value;*/
  }

}
