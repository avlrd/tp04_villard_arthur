import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../../Components/products/products.component';
import { SearchEngineComponent } from '../../Components/search-engine/search-engine.component';

@Component({
	selector: 'app-catalog',
	standalone: true,
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css'],
	imports: [ProductsComponent, SearchEngineComponent]
})
export class CatalogComponent {
	filter: string | null = null;

	protected updateCatalog(filter: string): void {
		this.filter = filter;
	}
}