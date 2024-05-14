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
  selected = 'Grid';
  menuSvg: SVGIcon = menuIcon;

  items: Array<DrawerItem> = [
    { text: 'Table', },
    { text: 'Grid' ,selected: true },
    { text: 'other Components' },
    { text: 'Buttons' },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selected = 'Grid';
  }
  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
