import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  pizzas = [
    { name: 'Margherita', description: 'Classic pizza with tomato, mozzarella & basil', price: 12,url:'assets/images/mag-pizza.jpg' },
    { name: 'Pepperoni', description: 'Loaded with pepperoni & mozzarella', price: 15,url:'assets/images/peeporoni.jpg', },
    { name: 'BBQ Chicken', description: 'Grilled chicken, BBQ sauce & onions', price: 16,url:'assets/images/bbq-chick.jpg' },
    { name: 'Veggie Delight', description: 'Mushrooms, olives, peppers & onions', price: 14,url:'assets/images/veggie.jpg' },
    { name: 'Canadian Special', description: 'Bacon, pepperoni, mushrooms & extra cheese', price: 18,url:'assets/images/cspecial.jpg' }
  ];
}


