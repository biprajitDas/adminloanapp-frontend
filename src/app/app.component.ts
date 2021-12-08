import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

import { DataSourceService } from './shared/data-source.service';

import { User } from './shared/user.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Loan Application';

  loginPass: boolean = false;
  loginFailed: boolean = false;
  private userSub!: Subscription;
  isLoading: boolean = false;
  error!: string;
  constructor(private titleService: Title, private router: Router, activatedRoute: ActivatedRoute,
    private dataSourceService: DataSourceService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join(' | ');
        titleService.setTitle(title);
      }
    });
  }
  async ngOnInit() {

    console.log("calling auto login");
    this.dataSourceService.autoLogin();

    this.userSub = await this.dataSourceService.user.subscribe(
      user => {
        console.log(user);

        this.loginPass = !!user;

        if (user)
          this.dataSourceService.setUserId(user.userId);

        console.log(!user);
        console.log(!!user);
        console.log("loginpass:", this.loginPass);
        if (this.loginPass) {
          this.dataSourceService.fetchReviewUsers();
        }
      }
    );

  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  async onLoginFormSubmit(f: NgForm) {
    //this.loginFailed=false;
    console.log(f.value);

    if (f.value.userId == "1234" || f.value.userId == "admin") {
      this.dataSourceService.login(f.value.userId, f.value.password);
      //this.router.navigate(['/']);
      this.dataSourceService.fetchReviewUsers();
      f.reset();
    }
    else {
      this.loginFailed = true;
      this.error = "Incorrect Credentials";
      f.reset();
    }

    console.log("3.....:", this.loginPass);
    //this.router.navigate(['/']);
  }
  onCloseError() {
    console.log("on oncloseError");
    this.error = null;
  }
  ngOnDestroy() {

    this.userSub.unsubscribe();
  }
}
