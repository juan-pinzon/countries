import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { FilterComponent } from './components/filter/filter.component'
import { CountryComponent } from './components/country/country.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FilterComponent,
		CountryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
