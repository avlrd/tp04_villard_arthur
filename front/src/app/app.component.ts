import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './Components/Common/header/header.component';
import { FooterComponent } from './Components/Common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
	CommonModule,
	RouterOutlet,
	HeaderComponent,
	FooterComponent
	],
  providers: [HttpClient]
})
export class AppComponent {}
