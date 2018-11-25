import { Component, OnInit } from '@angular/core';

import { TabService } from './../../services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(public service: TabService) {}

  ngOnInit() {}
}
