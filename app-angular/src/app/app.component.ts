import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Day 24 supply run"
  groceryItems: Array<string> = [
    "eggs",
    "lettuce",
    "oat milk",
  ]
  hasReminder = false

  sendReminder(val: boolean) {
    this.hasReminder = val
  }
}
