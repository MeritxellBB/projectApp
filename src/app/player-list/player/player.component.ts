import { Player } from './../../models/players';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() jugador!: Player;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  showPlayer(player: Player) {
    this.notify.emit(player);
  }

}
