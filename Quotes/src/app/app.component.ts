import { Component } from '@angular/core';
import{ Quotecls } from './quote1/quote1.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  quotes: Quotecls[];

  constructor(){
  this.quotes = [
    new Quotecls('my two cents', 0),
    new Quotecls('this too shall pass', 0),
    new Quotecls('if no one sees you, are you there at all',0)
  ];

  // sortedArticles(): Article[]{
  //   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  // }

  addQuotecls(quote: HTMLInputElement): boolean{
    console.log(`Adding Quotens quote: ${quote.value}`);this.quotes.push(new Quotecls(quote.value, 0));
    quote.value = '';
    return false;
  }
}
}
