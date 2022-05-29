import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepCloneComponent } from './deep-clone.component';

describe('DeepCloneComponent', () => {
  let component: DeepCloneComponent;
  let fixture: ComponentFixture<DeepCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeepCloneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the DeepCloneComponent Properly', () => {
    expect(component).toBeTruthy();
    document.getElementsByClassName('wrapper');
  });

  it('should have a code string property in DeepCloneComponent ', () => {
    expect(component.code).toBeTruthy();
    expect(typeof component.code).toBe('string');
  });
  it('should have a class wrapper in the DeepCloneComponent', () => {
    expect(document.getElementsByClassName('wrapper')).toBeTruthy();
  });
  it('should have a class code-block in the DeepCloneComponent', () => {
    expect(document.getElementsByClassName('code-block')).toBeTruthy();
  });
  it('should have a class description in the DeepCloneComponent', () => {
    expect(document.getElementsByClassName('description')).toBeTruthy();
  });
});
