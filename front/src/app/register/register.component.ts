import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	imports: [ReactiveFormsModule]
})
export class RegisterComponent {
	public showPassword: boolean = false;
	public showConfirmPassword: boolean = false;
	public submitted: boolean = false;
	registerForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.registerForm = this.fb.group({
			FirstName: ['', Validators.required],
			LastName: ['', Validators.required],
			Address: [''],
			Zip: ['', Validators.required],
			City: ['', Validators.required],
			Country: ['', Validators.required],
			Phone: ['', Validators.pattern('^[0-9]*$')],
			Email: ['', Validators.required],
			Gender: ['', Validators.required],
			Login: ['', Validators.required],
			Password: ['', [Validators.required, Validators.minLength(8)]],
			ConfirmPassword: ['', Validators.required]
		});
	}

	onSubmit(): void {
		if (this.registerForm.valid) {
			this.submitted = true;
			console.log(this.registerForm.value);
		}
	}
}
