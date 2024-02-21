import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common'

@Component({
  selector: 'grocery-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  @Input() title!: string
  @Input() groceryItems!: Array<string>
  @Input() hasReminder!: boolean

  @Output()
  sendReminder: EventEmitter<boolean> = new EventEmitter<boolean>()

  onReminderClick(e: any) {
    this.sendReminder.emit(!this.hasReminder)
  }
}
