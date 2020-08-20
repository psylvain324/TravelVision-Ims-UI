import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'travel-vision-ims-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
