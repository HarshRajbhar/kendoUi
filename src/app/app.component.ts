import { Component, OnInit } from '@angular/core';
import {
  SVGIcon,
  bellIcon,
  calendarIcon,
  envelopeLinkIcon,
  inboxIcon,
  menuIcon,
  starOutlineIcon,
} from '@progress/kendo-svg-icons';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kendo-angular-app';
  selected = 'Inbox';
  menuSvg: SVGIcon = menuIcon;

  items: Array<DrawerItem> = [
    { text: 'Table', selected: true },
    { text: 'Grid' },
    { text: 'other Components' },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selected = 'Table';
  }
  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
