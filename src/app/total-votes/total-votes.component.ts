import { QuoteDetailsComponent } from './../quote-details/quote-details.component';
import { QuotesComponent } from './../quotes/quotes.component';
import { Quote } from './../quote';
import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-total-votes',
  templateUrl: './total-votes.component.html',
  styleUrls: ['./total-votes.component.css']
})
export class TotalVotesComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
