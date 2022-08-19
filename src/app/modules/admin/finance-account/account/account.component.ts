import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainAccountComponent {

  constructor() { }

  openTab = 6;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

}
