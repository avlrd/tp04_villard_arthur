import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators,  AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css'],
	imports: [ReactiveFormsModule]
})
export class ConnexionComponent {
	public showPassword: boolean = false;
	public showConfirmPassword: boolean = false;
	public submitted: boolean = false;
	registerForm: FormGroup;

	constructor(private fb: NonNullableFormBuilder) {
		this.registerForm = this.fb.group({
			FirstName: ['', Validators.required],
			LastName: ['', Validators.required],
			Gender: ['', Validators.required],
			Phone: ['', Validators.pattern("^[0-9]*$")],
			Email: ['', [Validators.required, Validators.email]],
			Login: ['', Validators.required],
			Password: ['', [Validators.required, Validators.minLength(8)]],
			ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]]
		},
		{
			validators: this.MustMatch('Password', 'ConfirmPassword')
		});
	}

	get f() { return this.registerForm.controls; }

	MustMatch(pwd: string, confpwd: string): ValidatorFn {
		return (control: AbstractControl): ValidatorFn | null => {
			const password = control.get(pwd);
			const confirmPassword = control.get(confpwd);
			if (password?.value !== confirmPassword?.value) {
				confirmPassword!.setErrors({ mustMatch: true });
			}
			else {
				confirmPassword!.setErrors(null);
			}
			return null;
		}
	}

	onSubmit(): void {
		if (this.registerForm.valid) {
			this.submitted = true;
			console.log(this.registerForm.value);
		}
		else {
			console.log("Form is invalid");
			console.log(this.registerForm.value);
			console.log(this.registerForm.errors);
		}
	}
}
