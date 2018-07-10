import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="increment()">+</button>  
      {{defaultCounterValue}}
      <button (click)="decrement()">-</button>  
    </p>
  `,
  styles: []
})
export class CounterComponent {

  //default value for counter
  @Input('defaultvalue') defaultCounterValue;
  @Output() counterEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  increment(){
    this.defaultCounterValue = parseInt(this.defaultCounterValue);
    this.defaultCounterValue += 1;
    this.counterEmitter.emit(this.defaultCounterValue);
  }

  decrement(){
    this.defaultCounterValue = parseInt(this.defaultCounterValue);
    this.defaultCounterValue -= 1;
    this.counterEmitter.emit(this.defaultCounterValue);
  }
}
