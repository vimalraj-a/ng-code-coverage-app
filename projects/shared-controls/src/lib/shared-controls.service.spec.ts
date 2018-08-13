import { TestBed, inject } from '@angular/core/testing';

import { SharedControlsService } from './shared-controls.service';

describe('SharedControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedControlsService]
    });
  });

  it('should be created', inject([SharedControlsService], (service: SharedControlsService) => {
    expect(service).toBeTruthy();
  }));
});
