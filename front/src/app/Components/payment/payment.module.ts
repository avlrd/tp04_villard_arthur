import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentFormComponent } from './form/payment-form.component';
import { PaymentListComponent } from './list/payment-list.component';

@NgModule({
	declarations: [
		PaymentFormComponent,
		PaymentListComponent
	],
	imports: [
		ReactiveFormsModule
	],
	exports: [
		PaymentFormComponent,
		PaymentListComponent
	]
})
export class PaymentModule {}
