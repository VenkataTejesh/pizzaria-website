import { Component, signal } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { Offers } from './components/offers/offers';
import { Reviews } from './components/reviews/reviews';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [About,Footer,Hero,Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizzaria-website');
}
