import { Quote } from "./../quote";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upvote() {
    this.quote.upVote += 1;
  }
  downvote() {
    this.quote.dnVote += 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
