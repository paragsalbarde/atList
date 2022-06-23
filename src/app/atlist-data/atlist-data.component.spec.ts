import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlistDataComponent } from './atlist-data.component';

describe('AtlistDataComponent', () => {
  let component: AtlistDataComponent;
  let fixture: ComponentFixture<AtlistDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlistDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlistDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
