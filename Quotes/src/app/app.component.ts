import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(quote: HTMLInputElement): boolean{
    console.log(`Adding quote: ${quote.value}`);return false;
  }
}
