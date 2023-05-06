import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { ListService } from './list.service';
import { of } from 'rxjs';

fdescribe('ListService', () => {
  let service: ListService;
  let controller: HttpTestingController;
  const apiResponseValue = [{ name: 'hoge' }, { name: 'fuga' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), ListService],
    });
    service = TestBed.inject(ListService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user info from backend API', async () => {
    spyOn(service, 'get').and.callFake(() => of(apiResponseValue));
    service.get().subscribe((_) => expect(_).toEqual(apiResponseValue));
  });
});
