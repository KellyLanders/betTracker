import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwesOwedComponent } from './owes-owed.component';

describe('OwesOwedComponent', () => {
  let component: OwesOwedComponent;
  let fixture: ComponentFixture<OwesOwedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwesOwedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwesOwedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
