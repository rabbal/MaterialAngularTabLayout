import { Component, OnInit } from '@angular/core';

import { IdModel } from './../core/models/id-model';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  constructor(private model: IdModel) {}

  ngOnInit() {
    console.log(this.model);
  }
}
