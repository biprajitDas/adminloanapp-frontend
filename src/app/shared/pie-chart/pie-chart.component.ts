import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { DataSourceService } from '../data-source.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  tasksToComplete: number = 0;
  loanReviews: number = 0;
  loanApprovals: number = 0;
  @Input() chartData: any[];
  public pieChartData: number[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor(private dataSourceService: DataSourceService) {

  }

  async ngOnInit() {


  }


  public pieChartLabels: string[] = ['Reviewed', 'Rejected', "Approved"];
  // = [0, 1, 2];//= [this.loanReviews, this.loanApprovals, this.loanApprovals];
  public pieChartType: any = 'pie';
  public pieChartColors: any[] = [
    {
      backgroundColor: ['rgb(236, 107, 86)', 'rgb(255, 193, 84)', 'rgb(71, 179, 156)'],

    }

  ];
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
