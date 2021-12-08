import { Component, OnInit } from '@angular/core';

import { DataSourceService } from '../data-source.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  userID!:String;
  constructor(private dataSourceService:DataSourceService,
    private router:Router) { }

  ngOnInit() {
    this.userID = this.dataSourceService.getUserId();
  }
 
  signOut(){
    this.dataSourceService.logout();
    this.router.navigate(['/dashboard']);
  }
}
