import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEazyComponent } from './post-eazy.component';

describe('PostEazyComponent', () => {
  let component: PostEazyComponent;
  let fixture: ComponentFixture<PostEazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
