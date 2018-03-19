export class Quotecls {
  quote: string;
  votes: number;


constructor(quote: string, votes?:number){
this.quote = quote;
this.votes = votes || 0;
}
}
