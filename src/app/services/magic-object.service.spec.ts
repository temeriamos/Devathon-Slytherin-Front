import { TestBed } from '@angular/core/testing';

import { MagicObjectService } from './magic-object.service';

describe('MagicObjectService', () => {
  let service: MagicObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
