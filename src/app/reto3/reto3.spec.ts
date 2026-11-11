import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto3 } from './reto3';

describe('Reto3', () => {
  let component: Reto3;
  let fixture: ComponentFixture<Reto3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto3],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
