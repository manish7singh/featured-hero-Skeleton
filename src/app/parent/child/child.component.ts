import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;

  messageFromChild = "Hello Parents. I am your Child. Voila";
  
  constructor() { }

  ngOnInit() {
  }

}
