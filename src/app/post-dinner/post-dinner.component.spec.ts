import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDinnerComponent } from './post-dinner.component';

describe('PostDinnerComponent', () => {
  let component: PostDinnerComponent;
  let fixture: ComponentFixture<PostDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
