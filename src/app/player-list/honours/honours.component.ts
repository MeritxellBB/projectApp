import { honours } from './../../models/honours';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-honours',
  templateUrl: './honours.component.html',
  styleUrls: ['./honours.component.scss']
})
export class HonoursComponent implements OnInit {
  @Input() copas!: honours;
  
  constructor() { }

  ngOnInit(): void {
  }

}
