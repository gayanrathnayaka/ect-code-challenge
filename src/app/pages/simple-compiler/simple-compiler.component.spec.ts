import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCompilerComponent } from './simple-compiler.component';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SimpleCompilerComponent', () => {
  let component: SimpleCompilerComponent;
  let fixture: ComponentFixture<SimpleCompilerComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleCompilerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
