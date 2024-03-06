import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'Products', component: ProductsComponent},
	{ path: 'Register', component: RegisterComponent},
	{ path: '**', redirectTo: 'home' }
];

