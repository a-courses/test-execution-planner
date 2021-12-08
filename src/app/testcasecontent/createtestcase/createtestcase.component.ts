import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-createtestcase',
  templateUrl: './createtestcase.component.html',
  styleUrls: ['./createtestcase.component.css']
})
export class CreatetestcaseComponent implements OnInit {
  isCreate: boolean;
  viewStepList: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  createCase() {
    this.isCreate = true;
  }

  viewSteps(viewValue: string) {
    if (viewValue === 'steps') {
      this.viewStepList = true;
    } else {
      this.viewStepList = false;
    }

  }
}
