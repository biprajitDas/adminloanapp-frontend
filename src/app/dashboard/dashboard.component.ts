import { Component, OnInit } from '@angular/core';

import { DataSourceService } from '../shared/data-source.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  tasksToComplete!:number;
  constructor(private dataSourceService:DataSourceService) { }

  async ngOnInit() {
    await this.dataSourceService.fetchReviewUsers();
    this.tasksToComplete = this.dataSourceService.getUserDataLength();

  }

}
