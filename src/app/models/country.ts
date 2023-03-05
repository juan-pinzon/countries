export interface Country {
  name: {
		common: string
	}
  alpha2Code: string
  capital: string
  region: string
  subregion: string
  population: string
  latlng: string[]
  borders: string[]
  languages: {nativeName: string}[],
  flags: {
		svg: string
	}
}
