import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { SearchEngineComponent } from '../search-engine/search-engine.component';

@Component({
	selector: 'app-catalog',
	standalone: true,
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css'],
	imports: [ProductsComponent, SearchEngineComponent]
})
export class CatalogComponent {
}