import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  parentMessage = "Message from Parrent. Parrent says Hello to Child";

  @ViewChild(ChildComponent) child;

  constructor() { }

  messageFromParrents: string;

  ngAfterViewInit() {
    this.messageFromParrents = this.child.messageFromChild;
  }

}
