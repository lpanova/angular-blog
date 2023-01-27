import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOtherComponent } from './post-other.component';

describe('PostOtherComponent', () => {
  let component: PostOtherComponent;
  let fixture: ComponentFixture<PostOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
