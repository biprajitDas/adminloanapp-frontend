import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { LineChartComponent } from '../shared/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from 'app/shared/pie-chart/pie-chart.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { customFormsModule } from 'app/forms/forms.module';

@NgModule({
  imports: [
    DashboardRoutingModule, ChartsModule, BsDropdownModule.forRoot(), customFormsModule
  ],
  declarations: [DashboardComponent, BarChartComponent, LineChartComponent, PieChartComponent],
  providers: [
    BarChartComponent, LineChartComponent, PieChartComponent
  ]
})
export class DashboardModule { }
