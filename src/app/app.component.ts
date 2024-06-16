import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularApiHw';
  array: any[] = [];

  constructor(private apicall: ApiCallService) {}

  ngOnInit() {
    this.apicall.fetchData().subscribe((data: any) => {
      this.array = data;
    });
  }
}

