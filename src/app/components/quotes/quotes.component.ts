import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { QuotesModel } from '../../models/quotes-model';
import { QuotesService } from '../../services/quotes/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quoteForm: FormGroup;

  quoteList: QuotesModel[];
  fetchedList: QuotesModel[];

  constructor(private service: QuotesService, private formBuilder: FormBuilder) {
    this.quoteForm = this.createFormQuote(formBuilder);
  }

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotes()
      .then((data: QuotesModel[]) => {
        this.fetchedList = data;
      });
  }

  createFormQuote(formBuilder: FormBuilder) {
    // return formBuilder.group({
    //   quote: formBuilder.group({
    //     text: '',
    //     dateCreated: ''
    //   })
    // });
    return formBuilder.group({
      text: '',
      dateCreated: ''
    });
  }

  onSubmit() {
    const result: QuotesModel = Object.assign({}, this.quoteForm.value);
    this.service.addNewQuote(result.text);
    this.quoteForm.reset();
  }

  removeQuote(index) {
    this.service.removeQuote(index);
  }

}
