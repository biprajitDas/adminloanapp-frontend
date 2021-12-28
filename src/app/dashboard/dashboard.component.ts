import { Component, OnInit } from '@angular/core';

import { DataSourceService } from '../shared/data-source.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasksToComplete: number = 0;
  loanReviews: number = 0;
  loanApprovals: number = 0;
  constructor(private dataSourceService: DataSourceService) { }

  async ngOnInit() {
    await this.dataSourceService.fetchReviewUsers();
    this.tasksToComplete = this.dataSourceService.getUserDataLength();
    this.dataSourceService.getLoanReviewsByAssignee().subscribe(res => {
      this.loanReviews = res;
    }

    )
    this.dataSourceService.getLoanApprovalsByAssignee().subscribe(
      res => {
        this.loanApprovals = res;
      }
    );

  }

}
