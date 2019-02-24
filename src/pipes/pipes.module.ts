import { NgModule } from '@angular/core';
import { CountryCodeToNameInEngPipe } from './country-code-to-name-in-eng/country-code-to-name-in-eng';
import { CountryCodeToNameInThaiPipe } from './country-code-to-name-in-thai/country-code-to-name-in-thai';
import { CountryNameToFlagImageFilePipe } from './country-name-to-flag-image-file/country-name-to-flag-image-file';
@NgModule({
	declarations: [
    CountryCodeToNameInEngPipe,
    CountryCodeToNameInThaiPipe,
    CountryNameToFlagImageFilePipe],
	imports: [],
	exports: [
    CountryCodeToNameInEngPipe,
    CountryCodeToNameInThaiPipe,
    CountryNameToFlagImageFilePipe]
})
export class PipesModule {}
