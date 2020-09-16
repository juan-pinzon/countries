import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'
import { debounceTime, filter } from 'rxjs/operators'

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

	regions: string[] = [
		'africa',
		'americas',
		'asia',
		'europe',
		'oceania'
	]
	region = 'all'
	formFilter: FormGroup

	private subscriptions: Subscription[] = []

	constructor(
		private router: Router,
		private fb: FormBuilder
		) {
		this.formFilter = this.fb.group({
			name: [''],
			region: ['']
		})
	}

	ngOnInit(): void {
		this.subscriptions.push(this.formFilter.get('name').valueChanges
			.pipe(
				debounceTime(600),
			)
			.subscribe(value => {
				if (value) {
					this.formFilter.get('region').setValue('')
					this.router.navigate([''], { queryParams: { name: value } })
				}
			}))

		this.subscriptions.push(this.formFilter.get('region').valueChanges
			.pipe(
				filter(region => region)
			)
			.subscribe(value => {
				this.formFilter.get('name').setValue('')
				this.router.navigate([''], { queryParams: { region: value } })
			}))
	}

	clearSearch(): void {
		this.formFilter.get('name').setValue('')
		this.formFilter.get('region').setValue('all')
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe())
	}
}
