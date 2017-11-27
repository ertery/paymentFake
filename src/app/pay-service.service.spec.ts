/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PayServiceService } from './pay-service.service';

describe('PayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayServiceService]
    });
  });

  it('should ...', inject([PayServiceService], (service: PayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
