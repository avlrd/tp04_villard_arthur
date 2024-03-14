import { Component } from "@angular/core";
import { PaymentModule } from "./payment.module";

@Component({
	selector: "app-payment",
	standalone: true,
	templateUrl: "./payment.component.html",
	styleUrls: ["./payment.component.css"],
	imports: [PaymentModule]
})
export class PaymentComponent {
	
}