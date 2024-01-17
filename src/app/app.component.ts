import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'kendo-angular-app';
  selected = 'Inbox';
  menuSvg: SVGIcon = menuIcon;

  items: Array<DrawerItem> = [
    { text: 'Table', selected: true },
    { text: `Grid` },
  ];
  constructor(private router: Router) {}
  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    if (ev.item.text === 'Table') {
      this.router.navigate(['/table']);
    } else {
      this.router.navigate(['']);
    }
  }
}
