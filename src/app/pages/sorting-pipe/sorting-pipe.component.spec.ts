import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingPipeComponent } from './sorting-pipe.component';

describe('SortingPipeComponent', () => {
  let component: SortingPipeComponent;
  let fixture: ComponentFixture<SortingPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
