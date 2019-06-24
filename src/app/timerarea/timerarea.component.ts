import { Component, OnInit } from '@angular/core';
import { timer } from '../shared/timer.model';

@Component({
  selector: 'app-timerarea',
  templateUrl: './timerarea.component.html',
  styleUrls: ['./timerarea.component.css']
})
export class TimerareaComponent implements OnInit {

  timers: timer[] = [
    new timer("apple",1),
    new timer("tomato",2)

  ];
  constructor() { }

  ngOnInit() {
  }

}
