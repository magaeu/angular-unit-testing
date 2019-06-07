import {async, TestBed} from '@angular/core/testing';

import {AsyncBehaviorComponent} from './async-behavior.component';
import {AsyncBehaviorService} from '../../services/async-behavior/async-behavior.service';

describe('AsyncBehaviorComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncBehaviorComponent ],
      providers: [ AsyncBehaviorService ]
    });
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(AsyncBehaviorComponent);
      const component = fixture.componentInstance;
      const service = fixture.debugElement.injector.get(AsyncBehaviorService);

      return { fixture, component, service };
    }

    it('should create async-behavior component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should update name list', async(() => {
      const { fixture, component, service } = setup();
      fixture.detectChanges();

      const names = ['Bob', 'Mark'];
      fixture.whenStable()
        .then(() => {
          expect(component.names).toBeDefined();
          expect(component.names.length).toEqual(0);

          service.updateNames(names);
          return fixture.whenStable();
        })
        .then(() => {
          expect(component.names.length).toEqual(2);
          expect(component.names).toEqual(names);
        });
    }));
  });
});
