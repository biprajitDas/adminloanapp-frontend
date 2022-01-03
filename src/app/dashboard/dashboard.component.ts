import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DataSourceService } from '../shared/data-source.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId: String;
  tasksToComplete: number = 0;
  loanReviews: number = 0;
  loanRejected: number = 0;
  loanApprovals: number = 0;
  loanReviewsToComplete: number = 0;
  loanApprovalsToComplete: number = 0;
  lastMonthData: number[];
  lastSixMonthsData: number[];
  isFirstTime: boolean = true;
  pieChartData: number[];
  dropDownName: string = "Current Month";
  constructor(private dataSourceService: DataSourceService,
    private httpClient: HttpClient) {

  }

  async ngOnInit() {
    await this.dataSourceService.fetchReviewUsers();
    this.userId = await this.dataSourceService.getUserId();
    this.tasksToComplete = this.dataSourceService.getUserDataLength();
    await this.dataSourceService.getLoanReviewsByAssignee()
      .then(
        data => {
          this.loanReviewsToComplete = data;
        }
      ).catch(
        error => {
          console.log(error);
        }
      );
    await this.dataSourceService.getLoanApprovalsByAssignee()
      .then(
        data => {
          this.loanApprovalsToComplete = data;
        }
      ).catch(
        error => {
          console.log(error);
        }
      );
    var data: number[] = await this.dataSourceService.getChartData("currentmonth");
    this.pieChartData = data;
    console.log("this.lastMonthData : ", this.lastMonthData);
  }




  async getCurrentPieData() {
    var x: number[] = await this.dataSourceService.getChartData("currentmonth");
    console.log("inside dash current data", x);
    this.dropDownName = "Curent Month";
    this.pieChartData = x;

  }
  async getLastMonthPieData() {
    this.dropDownName = "Last Month";
    this.lastMonthData = await this.dataSourceService.getChartData("lastmonth");
    this.pieChartData = this.lastMonthData;
  }
  async getLastSixMonthsPieData() {

    this.dropDownName = "Last Six Months";
    this.lastSixMonthsData = await this.dataSourceService.getChartData("lastsixmonths");
    this.pieChartData = this.lastSixMonthsData;
  }
}
