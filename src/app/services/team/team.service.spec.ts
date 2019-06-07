import {async, TestBed} from '@angular/core/testing';

import {TeamService} from './team.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TeamService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ TeamService ]
    });
  }));

  describe(':', () => {

    function setup() {

      // const fixture = TestBed.createComponent(TeamService);
      const fixture = TestBed.get(TeamService);
      const component = fixture.componentInstance;
      // const http = fixture.debugElement.injector.get(HttpTestingController);

      return {fixture, component};
    }

    it('should create team service', () => {
      const {fixture} = setup();
      expect(fixture).toBeTruthy();
    });
  });
});
