import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlistLoginComponent } from './atlist-login.component';

describe('AtlistLoginComponent', () => {
  let component: AtlistLoginComponent;
  let fixture: ComponentFixture<AtlistLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlistLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
