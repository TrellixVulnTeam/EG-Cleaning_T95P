import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotoDetailsComponent } from './photo-details.component';

describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
