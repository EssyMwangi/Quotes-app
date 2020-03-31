import { Quote } from './../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quote(0,"","","","",0,0,new Date());
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","","",0,0,new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
