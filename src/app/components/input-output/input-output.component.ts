import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnChanges {

  @Input() defaultValue: number;
  @Output() valueUpdate: EventEmitter<string> = new EventEmitter<string>();
  counter = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('...');
    this.counter++;
  }

  updateValue(value: string) {
    this.valueUpdate.emit(value);
  }

}
