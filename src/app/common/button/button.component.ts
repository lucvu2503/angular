import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  contentBtn = 'Default';
  @Output() eventAdd = new EventEmitter();
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log('ngOnInit buttuon');
  }

  handleClickBtn(value: string) {
    console.log('click', value);
    this.router.navigate(['/admin'], {
      queryParams: {
        adbc: 0,
      },
    });
    this.eventAdd.emit('title change');
  }
}
