import { Component, OnInit } from '@angular/core';
import { CindyFramework } from 'ngx-cindy';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    const cindyFramework = CindyFramework.getInstance();
    cindyFramework.init(environment);
  }
}
