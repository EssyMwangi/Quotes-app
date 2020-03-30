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

  constructor() { }

  ngOnInit(): void {
  }

}


