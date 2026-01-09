import { TestBed } from '@angular/core/testing';

import { InitializeClientConfigService } from './initialize-client-config-service';

describe('InitializeClientConfigService', () => {
  let service: InitializeClientConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitializeClientConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
