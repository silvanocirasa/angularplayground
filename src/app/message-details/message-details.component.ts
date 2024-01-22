import {Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output} from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {

  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
