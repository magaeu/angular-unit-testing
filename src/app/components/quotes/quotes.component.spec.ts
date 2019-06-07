import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {QuotesService} from '../../services/quotes/quotes.service';
import {By} from '@angular/platform-browser';
import {QuotesModel} from '../../models/quotes-model';

describe('QuotesComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [QuotesService, FormBuilder],
      declarations: [ QuotesComponent ]
    });
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(QuotesComponent);
      const component = fixture.componentInstance;
      const service = fixture.debugElement.injector.get(QuotesService);
      const formBuilder = fixture.debugElement.injector.get(FormBuilder);
      component.quoteForm = formBuilder.group({
          text: '',
          dateCreated: ''
      });
      const element = fixture.debugElement.nativeElement;

      return { fixture, component, service, element };

    }

    function addText(text, fixture, element) {
      const input = element.querySelector('#quoteText');
      input.value = text;
      input.dispatchEvent(new Event( 'input'));
    }

    function buttonClick(component, element) {
      spyOn(component, 'onSubmit').and.callThrough();
      const button = element.querySelector('#submitBtn');
      button.click();
    }

    function createNewQuote(text: string, fixture, component, element) {
      addText(text, fixture, element);
      fixture.detectChanges();
      buttonClick(component, element);
    }

    function removeCard(fixture, element) {
      const cards = element.querySelector('#quote-cards');
      cards.click();
      fixture.detectChanges();
    }

    it('should create quote component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should use the quoteList from the service', () => {
      const { fixture, component, service } = setup();
      fixture.detectChanges();
      expect(service.getQuote()).toEqual(component.quoteList);
    });

    it('should create a new post', () => {
      const { fixture, component, element } = setup();
      fixture.detectChanges();
      const text = 'I love this test';
      createNewQuote(text, fixture, component, element);
      fixture.detectChanges();
      const card = element.querySelector('#quote-cards');
      expect(card.innerHTML).toContain(text);
    });

    it('should disable the button when textArea is empty', () => {
      const { fixture } = setup();
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('form.ng-untouched > button:nth-child(2)'));
      expect(button.nativeElement.disabled).toBeTruthy();
    });

    it('should enable button when textArea is not empty', () => {
      const { fixture, element } = setup();
      fixture.detectChanges();
      const text = 'I love this test';
      addText(text, fixture, element);
      const button = element.querySelector('#submitBtn');
      fixture.detectChanges();
      expect(button.disabled).toBeFalsy();
    });

    it('should remove post upon card click', () => {
      const { fixture, component, element } = setup();
      fixture.detectChanges();

      const text = 'I love this test';
      createNewQuote(text, fixture, component, element);
      expect(component.onSubmit).toHaveBeenCalled();
      fixture.detectChanges();

      const card = element.querySelector('#quote-cards');
      expect(card.innerHTML).toContain('I love this test');
      fixture.detectChanges();

      removeCard(fixture, element);

      expect(component.quoteList.length).toBeLessThan(1);
    });

    it('should fetch data asynchronously', async () => {
      const { fixture, component, service } = setup();
      const newQuote = new QuotesModel();
      newQuote.text = 'I love unit testing';
      newQuote.dateCreated = 'Mon 4, 2018';
      const fakedFetchedList = [
        newQuote
      ];
      spyOn(service, 'fetchQuotes').and.returnValue(
        Promise.resolve(fakedFetchedList)
      );
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.fetchedList).toBe(fakedFetchedList);
      });
    });
  });
});
