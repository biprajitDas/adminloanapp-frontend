import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSourceService } from 'app/shared/data-source.service';


@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.css']
})
export class TasksCompletedComponent implements OnInit {
  approvedCustomers: any[];
  reviewFailedCustomers: any[];
  rejectedCustomers: any[];

  users: any[] = [];
  itemsLength: number = 1;
  tableName: string = "Approved Loans";
  search: string = "";
  page: number = 1;

  totalItemsApproved: number;
  totalItemsRevieweFailed: number;
  totalItemsRejected: number;

  constructor(private dataSourceService: DataSourceService) { }

  async ngOnInit() {



    await this.dataSourceService.getApprovedCustomers().then(
      data => {
        this.approvedCustomers = data;

      }
    );
    await this.dataSourceService.getReviewFailedCustomers().then(
      data => {
        this.reviewFailedCustomers = data;

      }
    );

    await this.dataSourceService.getRejectedCustomers().then(
      data => {
        this.rejectedCustomers = data;

      }
    );


    console.log("fhdjfjdfj ", this.totalItemsApproved);
    this.users = this.approvedCustomers;
    this.itemsLength = await this.approvedCustomers.length;
  }
  reviewFailed() {
    this.page = 1;
    this.users = this.reviewFailedCustomers;
    this.itemsLength = this.reviewFailedCustomers.length;
    this.tableName = "Review Failed Loans";
    this.search = "";
  }
  rejected() {
    this.page = 1;
    this.users = this.rejectedCustomers;
    this.itemsLength = this.rejectedCustomers.length;
    this.tableName = "Rejected Loans";

    this.search = "";
  }
  approved() {
    this.page = 1;
    this.users = this.approvedCustomers;
    this.itemsLength = this.approvedCustomers.length;
    this.tableName = "Approved Loans";
    this.search = "";
  }

}
