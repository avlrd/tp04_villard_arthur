import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product, ProductStock } from '../models/product.model';

@Component({
	selector: 'app-products',
	standalone: true,
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
	imports: [AsyncPipe],
	providers: [ApiService]
})
export class ProductsComponent implements OnInit {
	@Input() filter: string | null = null;
	declare products: Observable<Array<Product>>;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.products = this.apiService.getProducts(this.filter);
	}

	ngOnChanges() {
		this.products = this.apiService.getProducts(this.filter);
	}
}