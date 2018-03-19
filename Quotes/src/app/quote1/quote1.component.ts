import { Component, OnInit,Input, HostBinding } from '@angular/core';
import { Quotecls } from './quote1.model'

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})

export class Quote1Component implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
Quotens: Quotecls;
@Input() Quotenss:Quotecls;
// votes: number;
// quote: string;

constructor() {
  // this.Quotens = new Quotecls('my two cents', 0);
// this.quote = 'my two cents';
// this.votes = 0;
}

voteUp(): boolean {
this.Quotens.voteUp();
return false;
}

voteDown() {
this.Quotens.voteDown();
return false;
}

  ngOnInit() {
  }

}
