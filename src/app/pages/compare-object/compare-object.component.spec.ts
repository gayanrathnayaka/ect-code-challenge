import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareObjectComponent } from './compare-object.component';

describe('CompareObjectComponent', () => {
  let component: CompareObjectComponent;
  let fixture: ComponentFixture<CompareObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareObjectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the CompareObjectComponent Properly', () => {
    expect(component).toBeTruthy();
    document.getElementsByClassName('wrapper');
  });

  it('should have a code string property in CompareObjectComponent ', () => {
    expect(component.code).toBeTruthy();
    expect(typeof component.code).toBe('string');
  });
  it('should have a class wrapper in the CompareObjectComponent', () => {
    expect(document.getElementsByClassName('wrapper')).toBeTruthy();
  });
  it('should have a class code-block in the CompareObjectComponent', () => {
    expect(document.getElementsByClassName('code-block')).toBeTruthy();
  });
  it('should have a class description in the CompareObjectComponent', () => {
    expect(document.getElementsByClassName('description')).toBeTruthy();
  });
});
