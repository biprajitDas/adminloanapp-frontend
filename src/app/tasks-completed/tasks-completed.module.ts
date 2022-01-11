import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { customFormsModule } from "app/forms/forms.module";
import { TablesModule } from "app/tables/tables.module";
import { NgxPaginationModule } from "ngx-pagination";
import { TasksCompletedRoutingModule } from "./tasks-completed-routing/tasks-completed-routing.module";
import { TasksCompletedComponent } from "./tasks-completed.component";

@NgModule(
    {
        imports: [
            TasksCompletedRoutingModule,
            CommonModule,
            customFormsModule,
            NgxPaginationModule,
            TablesModule
        ],
        declarations: [TasksCompletedComponent],

    }
)
export class TasksCompletedModule {

}