import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens = [];

  onStart(event) {
    console.log('increment: '+event.increment);
    this.evens.push(event.increment);
  }
}
