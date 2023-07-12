import { TestBed } from '@angular/core/testing';

import { WtfuiService } from './wtfui.service';

describe('WtfuiService', () => {
  let service: WtfuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtfuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
