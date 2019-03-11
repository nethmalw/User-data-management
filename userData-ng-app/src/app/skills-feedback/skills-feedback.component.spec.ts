import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFeedbackComponent } from './skills-feedback.component';

describe('SkillsFeedbackComponent', () => {
  let component: SkillsFeedbackComponent;
  let fixture: ComponentFixture<SkillsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
