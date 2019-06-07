import {async, TestBed} from '@angular/core/testing';

import {QuotesService} from './quotes.service';

describe('QuotesService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ QuotesService ]
    });
  }));

  describe(':', () => {

    function setup() {

      const service = TestBed.get(QuotesService);

      return { service };
    }

    it('should create quote service', () => {
      const { service } = setup();
      expect(service).toBeTruthy();
    });

    it('should create a post', () => {
      const quoteText = 'I love unit testing';
      const { service } = setup();
      service.addNewQuote(quoteText)
      expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
    });

    it('should remove a post', () => {
      const quoteText = 'I love unit testing';
      const { service } = setup();
      service.addNewQuote(quoteText);
      service.removeQuote(0);
      expect(service.quoteList.length).toBeLessThan(1);
    });

  });
});
