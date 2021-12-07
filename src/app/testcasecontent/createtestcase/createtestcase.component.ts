import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-createtestcase',
  templateUrl: './createtestcase.component.html',
  styleUrls: ['./createtestcase.component.css']
})
export class CreatetestcaseComponent implements OnInit {
  isCreate: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  createCase() {
    this.isCreate = true;
  }
}
