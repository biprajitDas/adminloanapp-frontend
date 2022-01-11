import { Component, OnInit } from '@angular/core';
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
  search: string = "";
  page: number = 1;
  totalItems: number = 10;
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
  }

}
