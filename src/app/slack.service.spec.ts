import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SlackService } from './slack.service';
import { Auth } from './auth';

describe('SlackService', () => {
  let injector: TestBed;
  let service: SlackService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    injector = getTestBed();
    service = injector.get(SlackService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<object>', () => {
    const dummyAuth: Auth = {
      token: 'foo',
      id: 'bar'
    };
    const dummyUser: object = {
      name: 'Peter Venkman'
    }

    service.getUserInfo(dummyAuth).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service.USER_API_URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

});
