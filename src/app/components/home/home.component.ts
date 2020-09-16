import { Component, OnDestroy, OnInit } from '@angular/core'

import { Observable, Subscription } from 'rxjs'

import { CountriesService } from '@services/countries/countries.service'
import { Country } from '@models/country'
import { ActivatedRoute } from '@angular/router'


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	darkMode = false
	countries$: Observable<Country[]>
	queryParamsS: Subscription

	constructor(
		private activatedRoute: ActivatedRoute,
		private countriesService: CountriesService
	) {
	}

	ngOnInit(): void {
		this.getCountries()
		this.queryParamsS = this.activatedRoute.queryParams
			.subscribe(params => {
				if (params.region) {
					const {region} = params
					if (region !== 'all') {
						this.getCountriesByRegion(region)
						return
					}
					this.getCountries()
				} else if (params.name) {
					this.getCountriesByName(params.name)
				}
			})
	}

	getCountries(): void {
		this.countries$ = this.countriesService.getCountriesAll()
	}

	getCountriesByRegion(code: string): void {
		this.countries$ = this.countriesService.getCountriesByRegion(code)
	}

	getCountriesByName(name: string): void {
		this.countries$ = this.countriesService.getCountriesByName(name)
	}

	toggleMode(darkMode): void {
		this.darkMode = darkMode
	}

	ngOnDestroy(): void {
		this.queryParamsS.unsubscribe()
	}
}
