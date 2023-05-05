import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  contentBtn = 'Default';
  @Output() eventAdd = new EventEmitter();
  handleClickBtn(value: string){
    console.log("click", value);
    this.eventAdd.emit("title change")
  }
}
