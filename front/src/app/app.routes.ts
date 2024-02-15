import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'Register', component: RegisterComponent},
	{ path: '**', redirectTo: 'home' }
];

