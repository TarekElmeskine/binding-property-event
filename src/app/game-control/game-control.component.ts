import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  startEvent = new EventEmitter<number>();
  increment: number = 0;
  interval;

  constructor() {

  }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.startEvent.emit(this.increment++);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

}
