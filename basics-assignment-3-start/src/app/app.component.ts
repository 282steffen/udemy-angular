import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showButton = false;
  clickLog = [];

  onButtonClick() {
    this.showButton = !this.showButton;
    if (this.clickLog.length === 0){
      this.clickLog.push(1);
    } else {
      this.clickLog.push(this.clickLog.length + 1);
    }
  }

  getColor(click) {
    return click > 4 ? 'blue' : 'white';
  }
}
