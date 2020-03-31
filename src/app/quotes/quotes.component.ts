import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quote[]=[
    new Quote(1, 'Essy Mwangi','Life','When life gives you lemons make lemonade','Anonymous'),
    new Quote(1, 'Essy Mwangi','Doubt','Doubt is the origin of wisdom','Anonymous'),
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

  constructor() { }

  ngOnInit(){
  }

}


