import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter();
  @Output() gameStopped = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {
    this.gameStarted.emit(null);
  }

  onGameStopped() {
    this.gameStopped.emit(null);
  }


}
