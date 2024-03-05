import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product, ProductStock } from '../models/product.model';

@Component({
	selector: 'app-products',
	standalone: true,
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	declare products: Observable<Array<Product>>;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.products = this.apiService.getProducts();
	}
}