import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { customFormsModule } from './forms/forms.module';
import { AlertModule } from "./shared/alert/alert.module";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { ChartsModule } from "ng2-charts";




@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent,



  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    AppRoutingModule,
    RouterModule,
    customFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ChartsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
