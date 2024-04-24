import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialFrontPageShopComponent } from './initial-front-page-shop/initial-front-page-shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitialFrontPageShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop_online';
}
