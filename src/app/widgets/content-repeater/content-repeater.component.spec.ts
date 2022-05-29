import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRepeaterComponent } from './content-repeater.component';

describe('ContentRepeaterComponent', () => {
  let component: ContentRepeaterComponent;
  let fixture: ComponentFixture<ContentRepeaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRepeaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
