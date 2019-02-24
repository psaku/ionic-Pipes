import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryNameToFlagImageFile',
})
export class CountryNameToFlagImageFilePipe implements PipeTransform {
  
  private countryFalg: Object = {
    "Thailand":"flag-th.png",
    "England":"flag-uk.png",
    "United States of America":"flag-us.png"
  }
  transform(value: string, ...args) {
    
    if (this.countryFalg[value]) {
      return this.countryFalg[value];
    } else {
      return "";
    }
  }
}
