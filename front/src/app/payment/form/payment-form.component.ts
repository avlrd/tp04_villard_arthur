import { Component } from "@angular/core";
import { AbstractControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from "@angular/forms";
import { Card } from "../../models/card.model";

@Component({
	selector: "app-payment-form",
	templateUrl: "./payment-form.component.html",
	styleUrls: ["./payment-form.component.css"]
})
export class PaymentFormComponent {
	paymentForm: FormGroup;
	
	constructor(private fb: NonNullableFormBuilder) {
		this.paymentForm = this.fb.group({
			CardHolder: ['', Validators.required],
			CardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
			ExpirationMonth: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')]],
			ExpirationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
			CVV: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
		},
		{
			validators: this.VerifyDate()
		});
	}

	onSubmit(): void {
		const cardInfo: Card = 
		{
			name: this.paymentForm.get('CardHolder')?.value,
			number: this.paymentForm.get('CardNumber')?.value,
			expiryDate: this.paymentForm.get('ExpirationDate')?.value,
			cvv: this.paymentForm.get('CVV')?.value
		};
		console.log("Allo ?");
		try {
			console.log(cardInfo);
		}
		catch (error) {
			console.error(error);
		}
	}

	VerifyDate(): ValidatorFn {
		return (control: AbstractControl<any, any>) => {
			const month = control.get('ExpirationMonth')?.value;
			const year = control.get('ExpirationYear')?.value;
			const date = new Date(year, month);
			const currentDate = new Date();
			if (date < currentDate) {
				return { dateError: true };
			}
			return null;
		};
	}
}