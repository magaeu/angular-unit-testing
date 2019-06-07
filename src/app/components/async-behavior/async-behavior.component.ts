import { Component, OnInit } from '@angular/core';
import {AsyncBehaviorService} from '../../services/async-behavior/async-behavior.service';

@Component({
  selector: 'app-async-behavior',
  templateUrl: './async-behavior.component.html',
  styleUrls: ['./async-behavior.component.css']
})
export class AsyncBehaviorComponent implements OnInit {

  names: string[];

  constructor(private asyncBehaviorService: AsyncBehaviorService) { }

  ngOnInit() {
    this.asyncBehaviorService.getNames().subscribe((names: string[]) => {
      this.names = names;
    });
  }

}
