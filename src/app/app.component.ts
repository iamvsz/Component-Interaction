import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  counter: number = 0;

  countChangedHandler(eventData: any) {
    this.counter = 2 * eventData;
    console.log(eventData)
  }

}
