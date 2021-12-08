import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import {DataSourceService} from '../shared/data-source.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public pageData;
  isLoading:boolean=false;
  isSent:boolean=false;
  @ViewChild('f') childForm!:NgForm;
  returnMessage!:string;
  constructor(router: Router, private route: ActivatedRoute,
    private dataSourceService:DataSourceService) {

  }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
    console.log(this.pageData.title)
  }
  async onSubmit(form:NgForm){
    this.isLoading=true;
    await this.dataSourceService.addUser(form.value);
    this.isLoading=false;
    //this.isSent=true;
    this.returnMessage="Application Sent Successfully";
    console.log("return Message", this.returnMessage);
    this.childForm.reset();
    setTimeout(()=>{
      this.isSent=false;
    this.childForm.reset();
    },3000);
    
  }
  onClear(){
      this.childForm.reset();
  }
  onCloseMessage(){
    console.log("on close message");
    this.returnMessage=null;
  }

}
