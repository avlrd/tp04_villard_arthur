import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
			Phone: ['', Validators.pattern('^/d+$')],
			Email: [''],
			Gender: [''],
			Login: [''],
			Password: [''],
			ConfirmPassword: ['']
		});

		for(let control: AbstractControl in this.registerForm.controls) {
			const validator = control.validator({} as any);

		
		Object.keys(this.registerForm.controls).forEach((key) => {
			const control = this.registerForm.get(key);
			if (control?.validator) {
				const validators = control.validator({} as any);
				if (validators?.['required']) {
					document.getElementById(key + 'Label')!.innerHTML += '<span style="color: red;">*</span>';
				}
			}
		});
	}

	onSubmit(): void {
		if (this.registerForm.valid) {
			this.submitted = true;
			console.log(this.registerForm.value);
		}
	}
}
