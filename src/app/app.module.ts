import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { TotalVotesComponent } from './total-votes/total-votes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuotesComponent,
    QuotesFormComponent,
    DatePipePipe,
    HighlightQuoteDirective,
    TotalVotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
