import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  constructor() { }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Apr"
  ];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Reviewed" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Rejected" },
    { data: [23, 46, 35, 14, 81, 22, 85], label: "Approved" }
  ];
  public chartColors: any[] = [
    { // first color
      backgroundColor: 'rgba(255, 140, 26)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
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

  ngOnInit() { }
}
