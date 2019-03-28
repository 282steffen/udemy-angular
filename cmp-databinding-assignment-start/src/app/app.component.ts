import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private game: any;
  private ticks: number[] = [];

  onGameStarted() {
    console.log('start clicked');
    this.game = setInterval(() => this.addNumberToGame(), 2000);
  }

  onGameStopped() {
    console.log('stop clicked');
    clearInterval(this.game);
  }

  addNumberToGame() {
      this.ticks.push(this.ticks.length);
  }
}
