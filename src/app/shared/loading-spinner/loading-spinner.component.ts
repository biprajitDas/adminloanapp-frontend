import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    console.log("on close");
    this.close.emit();
  }

}
