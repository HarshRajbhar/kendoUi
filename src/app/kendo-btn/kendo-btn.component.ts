import { Component, OnInit } from '@angular/core';
import {
  SVGIcon,
  anchorIcon,
  cartIcon,
  codeIcon,
} from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-kendo-btn',
  templateUrl: './kendo-btn.component.html',
  styleUrls: ['./kendo-btn.component.scss'],
})
export class KendoBtnComponent {
  svgCart: SVGIcon = cartIcon;
  svgAnchor: SVGIcon = anchorIcon;
  svgCode: SVGIcon = codeIcon;
  dropdown_data = [
    { text: 'My Profile' },
    { text: 'Friend Requests' },
    { text: 'Account Settings' },
    { text: 'Support' },
    { text: 'Log Out' },
  ];
  imageSrc =
    'https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg';

  addToQueue(): void {
    console.log('Added to queue!');
  }
}
