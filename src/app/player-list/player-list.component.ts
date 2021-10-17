import { honours } from './../models/honours';
import { Component, OnInit } from '@angular/core';
import { Player, players } from '../models/players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  playerList = players;
  selectedPlayer: Player;
  honoursList = honours;

  constructor() {
    this.selectedPlayer = this.playerList[0];
  }

  ngOnInit(): void {}
  printDetail(player: Player) {
    this.selectedPlayer = player;
  }
  printHonours(copas:honours) {
    this.honoursList = honours;
  }
}
