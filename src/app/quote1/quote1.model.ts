export class Quotecls {
  quote: string;
  votes: number;

constructor(quote: string, votes?:number){
this.quote = quote;
this.votes = votes;
}

voteUp(): void{
  this.votes +=1;
}

voteDown(): void{
  this.votes -=1;
}

}
