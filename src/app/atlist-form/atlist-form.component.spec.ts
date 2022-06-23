import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlistFormComponent } from './atlist-form.component';

describe('AtlistFormComponent', () => {
  let component: AtlistFormComponent;
  let fixture: ComponentFixture<AtlistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
