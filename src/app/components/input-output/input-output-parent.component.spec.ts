import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputParentComponent } from './input-output-parent.component';
import {InputOutputComponent} from './input-output.component';

describe('InputOutputParentComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputParentComponent, InputOutputComponent ]
    });
  }));

  describe(':', () => {

    function setup() {

      const fixture = TestBed.createComponent(InputOutputParentComponent);
      const component = fixture.componentInstance;
      const element = fixture.debugElement.nativeElement;

      return {fixture, component, element};
    }

    it('should create input-output-parent component', () => {
      const {component} = setup();
      expect(component).toBeTruthy();
    });

    it('should increment default value by one', () => {
      const {fixture, component, element} = setup();
      fixture.detectChanges();

      spyOn(component, 'incrementValue').and.callThrough();
      const button = element.querySelector('#btnIncrementValue');
      button.click();
      fixture.detectChanges();

      expect(component.incrementValue).toHaveBeenCalled();
      expect(component.defaultValue).toEqual(2);
    });
  });
});
