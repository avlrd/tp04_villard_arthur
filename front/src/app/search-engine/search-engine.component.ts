import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-search-engine',
	standalone: true,
	templateUrl: './search-engine.component.html',
	styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent {

	Search(): void {
		var searchInput: string = (<HTMLInputElement>document.getElementById("search-bar-field")).value;
		console.log(searchInput);
	}
}