import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderimageComponent } from './headerimage.component';

describe('HeaderimageComponent', () => {
  let component: HeaderimageComponent;
  let fixture: ComponentFixture<HeaderimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
