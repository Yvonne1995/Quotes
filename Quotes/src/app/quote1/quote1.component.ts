import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})

export class Quote1Component implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
votes: number;
quote: string;

constructor() {
this.quote = 'my two cents';
this.votes = 0;
}
voteUp() {
this.votes += 1;
return false;
}
voteDown() {
this.votes -= 1;
return false;
}

  ngOnInit() {
  }

}
