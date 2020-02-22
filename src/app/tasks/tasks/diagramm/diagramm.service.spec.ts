import { TestBed } from '@angular/core/testing';

import { DiagrammService } from './diagramm.service';

describe('DiagrammService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagrammService = TestBed.get(DiagrammService);
    expect(service).toBeTruthy();
  });
});
