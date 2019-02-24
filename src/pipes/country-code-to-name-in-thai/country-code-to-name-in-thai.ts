import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCodeToNameInThai',
})
export class CountryCodeToNameInThaiPipe implements PipeTransform {
  
  private countryName: Object = {
    "TH":"ประเทศไทย",
    "US":"สหรัฐอเมริกา",
    "UK":"อังกฤษ"
  }
  transform(value: string, ...args) {
    
    if (this.countryName[value]) {
      return this.countryName[value];
    } else {
      return "";
    }
  }
}
