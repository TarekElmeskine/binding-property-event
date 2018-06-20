import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  startEvent = new EventEmitter<{ increment: number }>();
  @Output('stop')
  stopEvent = new EventEmitter<>();
  increment: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.startEvent.emit({increment: this.increment++});
  }

  stop() {
    this.stopEvent.emit();
  }

}
