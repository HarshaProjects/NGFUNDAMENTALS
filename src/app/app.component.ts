import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h2>hello World</h2>
    <img src="/assets/images/basic-shield.png" />`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NgFundamentals';
}
