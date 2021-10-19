import { TestBed } from '@angular/core/testing';

import { DailyMoodRecordService } from './daily-mood-record.service';

describe('DailyMoodRecordService', () => {
  let service: DailyMoodRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyMoodRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
