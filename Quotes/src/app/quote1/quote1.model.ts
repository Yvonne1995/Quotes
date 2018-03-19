export class Quotecls {
  quote: string;
  votes: number;


constructor(quote: string, votes?:number){
this.quote = quote;
this.votes = votes || 0;
}

voteUp(): void{
  this.votes +=1;
}

voteDown(): void{
  this.votes -=1;
}

}
