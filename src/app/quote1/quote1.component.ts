import { Component, OnInit, Input, HostBinding } from '@angular/core';
import{ Quotecls } from './quote1.model';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() quote: Quotecls;

  constructor() {

  }

voteUp(): boolean {
  this.quote.voteUp();
  return false;
}

voteDown(): boolean {
  this.quote.voteDown();
  return false;
}

  ngOnInit() {
  }

}
