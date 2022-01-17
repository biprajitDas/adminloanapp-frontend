import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { DataSourceService } from '../shared/data-source.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public pageData;
  isLoading: boolean = false;
  isSent: boolean = false;
  @ViewChild('f') childForm!: NgForm;
  @ViewChild('inputFilePan') myInputPan: ElementRef;
  @ViewChild('inputFileAad') myInputAad: ElementRef;
  returnMessage!: string;

  pan: FormGroup;
  aadhar: FormGroup;




  constructor(router: Router, private route: ActivatedRoute,
    private dataSourceService: DataSourceService,
    public fb: FormBuilder, private http: HttpClient) {
    this.pan = this.fb.group({
      img: [null]
    })
    this.aadhar = this.fb.group({
      img: [null]
    })
  }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
    console.log(this.pageData.title)
  }
  async onSubmit(form: NgForm) {
    this.isLoading = true;
    console.log("Application sending..1..");
    try {
      await await this.dataSourceService.addUser(form.value);
    } catch (err) {
      alert("server down pleae try again");
    }

    console.log("Application sending..3..");
    var formDataPAN: any = new FormData();
    formDataPAN.append("file", this.pan.get('img')!.value);
    await this.dataSourceService.uploadFile(formDataPAN, form.value.pannumber);
    console.log(form.value.aadharnumber);
    var formDataAAD: any = new FormData();
    formDataAAD.append("file", this.aadhar.get('img')!.value);
    await this.dataSourceService.uploadFile(formDataAAD, form.value.aadharnumber);
    this.isLoading = false;
    this.isSent = true;
    this.returnMessage = this.dataSourceService.getReturnMessage();
    console.log("return Message", this.returnMessage);
    this.childForm.reset();
    setTimeout(() => {
      this.isSent = false;
      this.childForm.reset();
    }, 3000);


    this.myInputPan.nativeElement.value = '';
    this.myInputAad.nativeElement.value = '';


  }
  onClear() {
    this.childForm.reset();
  }
  onCloseMessage() {
    console.log("on close message");
    this.returnMessage = null;
  }
  uploadPAN(event: any) {
    const file = (event.target.files[0]);
    this.pan.patchValue({
      img: file
    });
    console.log(this.pan.get('img')!.value);
    this.pan.get('img')!.updateValueAndValidity()


  }
  uploadAAD(event: any) {
    const file = (event.target.files[0]);
    this.aadhar.patchValue({
      img: file
    });
    console.log(this.aadhar.get('img')!.value);
    this.aadhar.get('img')!.updateValueAndValidity()
  }


}
