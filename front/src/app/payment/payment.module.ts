import { NgModule } from '@angular/core';
import { PaymentFormComponent } from './form/payment-form.component';
import { PaymentListComponent } from './list/payment-list.component';

@NgModule({
	declarations: [
		PaymentFormComponent,
		PaymentListComponent
	]
})
export class PaymentModule {}
