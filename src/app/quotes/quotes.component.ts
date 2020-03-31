import { Quote } from './../quote';
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quote:Quote[]=[
    new Quote(1, 'Essy', 'Life','Every moment is a fresh beginning.','Anonymous',0,0,new Date(2020,2,10)),
    new Quote(2, 'Ashley', 'Wisdom','Doubt is the beginning of wisdom.','Anonymous',0,0,new Date(2020,3,14)),
  
  ];

  displayInfo(index){
    this.quote[index].showInfo = !this.quote[index].showInfo;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  quoteShow(isDone, index) {
    if (isDone) {
      console.log('${this.quotes[index].upVote }');
    }
  }
 
  addedQuote(quote){
    let arraysize = this.quote.length;
    quote.id = arraysize+1;
    quote.publishedDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  upVoter(index) {
    let i: number;
    i = this.quote[index].upVote;
    i++;
    this.quote[index].upVote = i;
    // console.log('this i: ' + i);
  }

  dnVoter(index) {
    let j: number;
    j = this.quote[index].dnVote;
    j++;
    this.quote[index].dnVote = j;
  }

  highest(arr) {
    arr = [];
    this.quote.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }
  addQuote(quote) {
    this.quote.unshift(quote);
    console.log(this.quote);
  }

  constructor() { }

  ngOnInit(){
    const arr = [];
    this.quote.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
  }

}


