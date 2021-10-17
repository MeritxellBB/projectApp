import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {
  mostrandoIf: boolean = false;
  mostrandoFor: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  seeElementNgIf() {
    if (this.mostrandoIf) {
      this.mostrandoIf = false;
      console.log(this.mostrandoIf);
    } else {
      this.mostrandoIf = true;
      console.log(this.mostrandoIf);
    }
  }
}

