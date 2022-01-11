import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksCompletedComponent } from "../tasks-completed.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: TasksCompletedComponent
    },

];
@NgModule({

    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class TasksCompletedRoutingModule { }