import { Component, OnInit } from "@angular/core";
import { DataSourceService } from "../data-source.service";


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  constructor(private dataSourceService: DataSourceService) { }
  monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  lastSixMonths: string[];
  barChartData1: number[];
  async ngOnInit() {
    var currentMonth = new Date().getMonth();
    this.lastSixMonths = await this.monthNames.slice(currentMonth - 5).concat(this.monthNames.slice(0, currentMonth));
    this.lastSixMonths.push(this.monthNames[currentMonth]);
    this.barChartLabels = await this.lastSixMonths;
    console.log("currentMonth: ", currentMonth);
    console.log("6Month: ", this.lastSixMonths);
    this.barChartData1 = await this.dataSourceService.getChartData("eachmonthdata");
    console.log("bar data :", this.barChartData1);
    this.barChartData = [
      // {
      //   data: [this.barChartData1[15], this.barChartData1[12], this.barChartData1[9], this.barChartData1[6], this.barChartData1[3], this.barChartData1[0]],
      //   label: "Reviewed"
      // },
      // { data: [this.barChartData1[16], this.barChartData1[13], this.barChartData1[10], this.barChartData1[7], this.barChartData1[4], this.barChartData1[1]], label: "Rejected" },
      // { data: [this.barChartData1[17], this.barChartData1[14], this.barChartData1[11], this.barChartData1[8], this.barChartData1[5], this.barChartData1[2]], label: "Approved" }
      {
        data: [10, 30, 32, 27, 2, this.barChartData1[0]],
        label: "Reviewed"
      },
      { data: [5, 11, 7, 13, 4, this.barChartData1[1]], label: "Rejected" },
      { data: [30, 15, 23, 14, 1, this.barChartData1[2]], label: "Approved" }
    ];
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false

  };
  public barChartLabels: string[];

  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[];
  public chartColors: any[] = [
    { // first color
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // second color 26, 117, 255
      backgroundColor: 'rgba( 255, 26, 26)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // third color   26, 255, 198
      backgroundColor: 'rgba(71, 209, 71)',
      //
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(26, 255, 26)'
    }
  ]
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }


}
