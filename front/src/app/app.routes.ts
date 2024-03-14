import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { PaymentComponent } from "./payment/payment.component";

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'Catalog', component: CatalogComponent},
	{ path: 'Payment', component: PaymentComponent},
	{ path: 'Register', component: RegisterComponent},
	{ path: '**', redirectTo: 'home' }
];

