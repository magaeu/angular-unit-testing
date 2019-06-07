import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as sinon from 'sinon';
import { TeamComponent } from './team.component';
import {TeamService} from '../../services/team/team.service';
import {of} from 'rxjs/internal/observable/of';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeamComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ TeamService ]
    });
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(TeamComponent);
      const component = fixture.componentInstance;
      const service = fixture.debugElement.injector.get(TeamService);

      return { fixture, component, service };
    }

    it('should create team', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    /*
     Stub is a function that replaces a real implementation
     of an existing function.
     Stubbing is, generally, an operation local to a test.
     We use stubs if we want to:
      control individual method behavior for a specific test case;
      prevent a method from making side effects
        like communicating with the outside world using Angular's HttpClient.
     */
    it('should get the teams (stub)', () => {
      const { fixture, component, service } = setup();
      fixture.detectChanges();

      const team = [{name: 'Barcelona'}];
      service.getTeams = () => of(team);

      fixture.detectChanges();

      component.teams$.subscribe((teams) => {
        expect(teams).toEqual(team);
      });
    });

    /*
    Allows to watch how the function is used.
    We use spies when we want to track:
      if a function has been called by the SUT;
      how many times it has been called;
      which arguments were passed.
     */
    it('should get the teams (spy)', async () => {
      const { fixture, service } = setup();

      spyOn(service, 'getTeams');
      fixture.detectChanges();

      expect(service.getTeams).toHaveBeenCalled();
    });

    it('should get the teams (mock)', () => {
      const { fixture, service } = setup();
      const mock = sinon.mock(service);

      mock.expects('getTeams').once();
      fixture.detectChanges();

      mock.verify();
    });

  });
});
