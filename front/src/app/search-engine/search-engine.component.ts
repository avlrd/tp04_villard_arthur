import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-search-engine',
	standalone: true,
	templateUrl: './search-engine.component.html',
	styleUrls: ['./search-engine.component.css'],
	imports: [AsyncPipe, FormsModule]
})
export class SearchEngineComponent {
	filtersNumber: number = 0;
	searchInputSave: string = '';

	//test
	addOne(): void {
		this.filtersNumber++;
	}

	protected searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');
	@Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

	protected Search(): void {
		var searchInput: string = (<HTMLInputElement>document.getElementById("search-bar-field")).value;
		this.searchInputSave = searchInput;
		console.log(searchInput);
		this.searchEvent.emit(searchInput);
	}
}