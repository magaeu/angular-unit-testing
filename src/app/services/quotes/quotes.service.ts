import {Injectable} from '@angular/core';
import {QuotesModel} from '../../models/quotes-model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  public quoteList: QuotesModel[] = [];

  private daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  constructor() { }

  addNewQuote(quote: string) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeek[date.getDay()];
    const day = date.getDay();
    const year = date.getFullYear();
    const newQuote = new QuotesModel();
    newQuote.text = quote;
    newQuote.dateCreated = `${dayOfTheWeek} ${day}, ${year}`;
    this.quoteList.push(newQuote);
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index) {
    this.quoteList.splice(index, 1);
  }

  fetchQuotes() {
    return new Promise((resolve, reject) => {
      const newQuote = new QuotesModel();
      newQuote.text = 'I love unit testing';
      newQuote.dateCreated = 'Mon 4, 2018';
      setTimeout(() => {
        resolve([newQuote]);
      }, 2000);
    });
  }
}
