import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-output-parent',
  templateUrl: './input-output-parent.component.html',
  styleUrls: ['./input-output-parent.component.css'],
})
export class InputOutputParentComponent implements OnInit {

  defaultValue = 1;

  incrementValue() {
    this.defaultValue++;
  }

  constructor() { }

  ngOnInit() {
  }

}
