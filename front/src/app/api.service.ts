import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product.model';
import { env } from './env/env';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	public getProducts(filter: string | null): Observable<Array<Product>> {
		if (filter === null) {
			return this.http.get<{ products: Array<Product> }>(env.backendClient)
				.pipe(map(response => response.products));
		}
		else {
			const filterWords = filter.split(' ');
			return this.http.get<{ products: Array<Product> }>(env.backendClient)
				.pipe(
					map(response => response.products.filter(product => {
						return filterWords.every(word => {
							return product.name.toLowerCase().includes(word.toLowerCase()) || product.brand.toLowerCase().includes(word.toLowerCase());
						});
					}))
				);
		}
	}
}
