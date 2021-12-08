import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../shared/data-source.service';
import { User } from '../shared/user.model';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  users:User[]=[];
  subscription!:Subscription;
  search:string="";
  name:string="";
  imageUrl!:String;
  showDiagram:boolean=false;
  constructor(private dataSourceService:DataSourceService,
    private sanitizer: DomSanitizer) { }
  async ngOnInit() {
     this.subscription = this.dataSourceService.usersDataChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.users = await this.dataSourceService.getUsers();
    console.log("users : ",this.users);
    console.log(this.users);
  }
  findUserByInde(i:number){
    console.log(this.users[i]);
    //return this.users[i];
  }
   async fetchNewUsers(){
    console.log("Fetch New Users ..");
    await this.dataSourceService.fetchReviewUsers();
  }

   onShowDiagram(processInstanceId:String){
  // await this.dataSourceService.getFlowDiagram(processInstanceId).subscribe(
  //   data=>{
  //     this.image=data;
  //      let objectURL = 'data:image/png;base64,' + data;
  //       console.log("objectURL :",objectURL);
  //    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //      console.log("img",this.image);
  //   });
  //  //console.log(this.diagram);
 this.imageUrl = 'http://localhost:8083/springboot-flowable-service/process/runtime/process-instances/'+processInstanceId+'/diagram';
//   console.log("image url",this.imageUrl);
//   this.showDiagram=true;
 
  }
  // onClose(){
  //   this.showDiagram=false;
  // }
  handleCloseDiagram(){
    this.imageUrl=null;
  }
}
