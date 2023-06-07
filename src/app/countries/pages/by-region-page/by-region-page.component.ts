import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';


type Region = 'Africa' | 'Europe' | 'Americas' | 'Oceania' | 'Asia';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa' , 'Europe' , 'Americas' , 'Oceania' , 'Asia']
  public isLoading: boolean = false;
  public selectedRegion?:Region;

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( region: Region ):void  {
    this.selectedRegion = region
    this.isLoading = true;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false
      });

  }

}
