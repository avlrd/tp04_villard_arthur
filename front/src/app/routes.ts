import { Routes } from "@angular/router";

import { ConnexionComponent } from "./Pages/connexion/connexion.component";
import { HomeComponent } from "./Pages/home/home.component";
import { CatalogComponent } from "./Pages/catalog/catalog.component";
import { AccountComponent } from "./Pages/account/account.component";
import { CartComponent } from "./Pages/cart/cart.component";

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'MyShop' },
	{ path: 'Catalog', component: CatalogComponent, title: 'Products - MyShop'},
	{ path: 'Connexion', component: ConnexionComponent, title: 'Connexion - MyShop'},
	{ path: 'Account', component: AccountComponent, title: 'Account - MyShop'},
	{ path: 'Cart', component: CartComponent, title: 'Cart - MyShop'},
	{ path: '**', redirectTo: 'home' }
];
