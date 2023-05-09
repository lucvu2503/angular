import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter();

  handleCloseModal() {
    this.closeModal.emit();
  }
}
