import {async, TestBed} from '@angular/core/testing';

import {InputOutputComponent} from './input-output.component';
import {InputOutputParentComponent} from './input-output-parent.component';
import {SimpleChange} from '@angular/core';

describe('InputOutputComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputComponent, InputOutputParentComponent ]
    });
  }));

  describe(':', () => {

    function setup() {

      const fixture = TestBed.createComponent(InputOutputComponent);
      const component = fixture.componentInstance;

      return { fixture, component };
    }

    it('should create input-output component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should increment counter by one', () => {
      const { fixture, component } = setup();
      fixture.detectChanges();

      component.defaultValue = 1;

      component.ngOnChanges({
        defaultValue: new SimpleChange(null, component.defaultValue, true)
      });

      fixture.detectChanges();

      // expect(component.ngOnChanges).toHaveBeenCalled();
      expect(component.counter).toEqual(1);
    });

    it('should update the value', () => {
      const { component } = setup();
      const value = 'I love test';
      spyOn(component.valueUpdate, 'emit');

      component.updateValue(value);

      expect(component.valueUpdate.emit).toHaveBeenCalled();
      expect(component.valueUpdate.emit).toHaveBeenCalledWith(value);
    });

  });
});
