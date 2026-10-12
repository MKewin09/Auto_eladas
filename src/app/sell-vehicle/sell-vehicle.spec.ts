import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellVehicle } from './sell-vehicle';

describe('SellVehicle', () => {
  let component: SellVehicle;
  let fixture: ComponentFixture<SellVehicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellVehicle],
    }).compileComponents();

    fixture = TestBed.createComponent(SellVehicle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
