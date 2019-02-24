import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCodeToNameInEng',
})
export class CountryCodeToNameInEngPipe implements PipeTransform {

  private countryName: Object = {
    "TH":"Thailand",
    "US":"United States of America",
    "UK":"England"
  }
  transform(value: string, ...args) {
    
    if (this.countryName[value]) {
      return this.countryName[value];
    } else {
      return "";
    }
  }
}
