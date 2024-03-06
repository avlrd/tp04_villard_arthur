import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
	selector: 'app-catalog',
	standalone: true,
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css'],
	imports: [ProductsComponent]
})
export class CatalogComponent {
}