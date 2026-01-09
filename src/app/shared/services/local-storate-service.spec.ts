import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storate-service';
  
describe('LocalStorateService', () => {
  let service: LocalStorateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
