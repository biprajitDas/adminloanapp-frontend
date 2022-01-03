import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { DataSourceService } from '../../shared/data-source.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: User;
  id!: number;
  isReviewSuccess: boolean = false;
  isReviewRejected: boolean = false;
  isApproaved: boolean = false;
  isRejected: boolean = false;
  isNeedMoreDetails: boolean = false;
  isLoading: boolean = false;
  returnMessage!: string;

  image_url = "http://localhost:8083/springboot-flowable-service/downloadFile/";
  pannumber: String;
  aadharnumber: String;
  pan_url = "";
  aad_url = "";

  constructor(private route: ActivatedRoute,
    private dataSourceService: DataSourceService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.user = this.dataSourceService.getUserByIndex(this.id);
        console.log("this.user", this.user);
        this.pannumber = this.user.pannumber;
        this.aadharnumber = this.user.aadharnumber;
        this.pan_url = this.image_url + this.pannumber + '.jpg';
        this.aad_url = this.image_url + this.aadharnumber + '.jpg';
        console.log("pan_url", this.pan_url);
        console.log("fetched user by index : ", this.user);
      })

  }
  async onReviewSuccess(form: NgForm) {
    this.isLoading = true;
    console.log("on review Success");
    const data = {
      "detailsmissing": false,
      "isreviewsuccess": true,
      "reviewercomment": form.value.comment
    };
    const body = JSON.stringify(data);
    this.isLoading = true;
    await this.dataSourceService.loanReview(this.user.current_task_id, body);
    this.isLoading = false;
    this.returnMessage = "Application Reviewed Successfully!!";
    this.dataSourceService.removeUserByIndex(this.id);

    setTimeout(() => {
      this.isReviewSuccess = false;
      this.isLoading = false;
      this.router.navigate(['/tables']);
    }, 4000);

  }
  async onReviewReject(form: NgForm) {
    const data = {
      "detailsmissing": false,
      "isreviewsuccess": false,
      "reviewercomment": form.value.comment
    };
    const body = JSON.stringify(data);
    this.isLoading = true;
    await this.dataSourceService.loanReview(this.user.current_task_id, body);
    this.isLoading = false;
    this.returnMessage = "Application Rejected.";

    this.dataSourceService.removeUserByIndex(this.id);
    setTimeout(() => {
      this.isReviewRejected = false;
      this.router.navigate(['/tables']);
    }, 3000);
  }
  async onApprovalSuccess(form: NgForm) {

    const data = {
      "loanapprove": true,
      "approvercomment": form.value.comment
    };
    const body = JSON.stringify(data);
    this.isLoading = true;

    await this.dataSourceService.loanReview(this.user.current_task_id, body);
    this.isLoading = false;
    this.returnMessage = "Application Approved Successfully!!";
    this.dataSourceService.removeUserByIndex(this.id);
    setTimeout(() => {
      this.isApproaved = false;
      this.router.navigate(['/tables']);
    }, 3000);
  }

  async onApprovalReject(form: NgForm) {
    console.log("on Approval Rejection");
    const data = {
      "loanapprove": false,
      "approvercomment": form.value.comment
    };
    const body = JSON.stringify(data);
    this.isLoading = true;
    await this.dataSourceService.loanReview(this.user.current_task_id, body);
    this.isLoading = false;
    this.returnMessage = "Application Rejected.";
    this.dataSourceService.removeUserByIndex(this.id);
    setTimeout(() => {
      this.isRejected = false;
      this.router.navigate(['/tables']);
    }, 3000);
  }
  onBack() {
    this.router.navigate(['/tables']);
    this.returnMessage = null;
  }
  onCloseMessage() {
    console.log("on clpse mesage");
    this.returnMessage = null;
  }

}
