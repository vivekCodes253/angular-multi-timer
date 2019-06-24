import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.css']
})
export class TimeboxComponent implements OnInit {

  constructor() {
   }

  
  ngOnInit() {
  }

  @Input() timeLeft: number;
  @Input() name: string;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  


}
