import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./resgitration-form/registration-form.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'Register', component: RegistrationFormComponent},
	{ path: '**', redirectTo: 'home' }
];

