import { Quote } from './quote';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1,name:'When life gives you lemons make lemonade'},
    {id:2,name:'Doubt is the origin of wisdom'},
  ];
}
