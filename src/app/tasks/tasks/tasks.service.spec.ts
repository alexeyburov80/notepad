import { TestBed } from '@angular/core/testing';
import {MatDialog, MatTableDataSource} from '@angular/material';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksService = TestBed.get(TasksService);
    expect(service).toBeTruthy();
  });
});
