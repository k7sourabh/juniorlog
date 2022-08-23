import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {

  showExport:boolean = false;
  showButton:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
