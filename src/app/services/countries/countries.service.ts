import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { Country } from '@models/country'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class CountriesService {

	constructor(
		private http: HttpClient
	) {
	}

	getCountriesAll(): Observable<Country[]> {
		return this.http.get<Country[]>(`${environment.api_endpoint}all`)
			.pipe(
				map(countries => countries as Country[])
			)
	}

	getCountriesByRegion(region: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${environment.api_endpoint}region/${region}`)
	}

	getCountriesByName(name: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${environment.api_endpoint}name/${name}`)
	}

	getCountry(code: string): Observable<Country> {
		return this.http.get<Country>(`${environment.api_endpoint}alpha/${code}`)
	}
}
