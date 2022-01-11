import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSourceService } from '../shared/data-source.service';
import { User } from '../shared/user.model';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  users: User[] = [];
  userFiltered: User[] = [];

  subscription!: Subscription;
  search: string = "";
  name: string = "";
  imageUrl!: String;
  showDiagram: boolean = false;

  page: number = 1;
  totalItems: number;


  constructor(private dataSourceService: DataSourceService,
    private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.subscription = this.dataSourceService.usersDataChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.users = await this.dataSourceService.getUsers();
    console.log("users : ", this.users);
    console.log(this.users);
    this.totalItems = this.users.length;

    console.log("Fetching New Users ..");
    await this.dataSourceService.fetchReviewUsers();
  }

  findUserByInde(i: number) {
    console.log(this.users[i]);

  }

  async fetchNewUsers() {
    console.log("Fetch New Users ..");
    await this.dataSourceService.fetchReviewUsers();
  }

  onShowDiagram(processInstanceId: String) {

    this.imageUrl = 'http://localhost:8083/springboot-flowable-service/process/runtime/process-instances/' + processInstanceId + '/diagram';

  }

  handleCloseDiagram() {
    this.imageUrl = null;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userFiltered = [];
    this.users = this.dataSourceService.getUsers();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].started_date >= form.value.start && this.users[i].started_date <= form.value.end) {
        this.userFiltered.push(this.users[i]);
      }
    }

    console.log(this.userFiltered);
    this.users = this.userFiltered;

  }
  onReset() {
    this.form.reset();
    this.userFiltered = [];
    this.users = this.dataSourceService.getUsers();
  }

}
