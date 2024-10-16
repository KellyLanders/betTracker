import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetBarComponent } from './bet-bar.component';

describe('BetBarComponent', () => {
  let component: BetBarComponent;
  let fixture: ComponentFixture<BetBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
