import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    {id:1,name:'When life gives you lemons make lemonade'},
    {id:2,name:'Doubt is the origin of wisdom'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
