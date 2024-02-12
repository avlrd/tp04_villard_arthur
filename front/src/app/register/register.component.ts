import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	imports: [ReactiveFormsModule]
})
export class RegisterComponent {
	showPassword = false;
	showConfirmPassword = false;
	registerForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.registerForm = this.fb.group({
			FirstName: [''],
			LastName: [''],
			Adress: [''],
			Zip: [''],
			City: [''],
			Country: [''],
			Phone: [''],
			Email: [''],
			Gender: [''],
			Login: [''],
			Password: ['']
		});
	}

	onSubmit(): void {

	}

	toggleVisibility(input: HTMLInputElement): void {
		if(input.type === 'password') {
			input.type = 'text';
		}
		else {
			input.type = 'password';
		}
	}
}
