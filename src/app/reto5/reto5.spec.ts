import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto5 } from './reto5';

describe('Reto5', () => {
  let component: Reto5;
  let fixture: ComponentFixture<Reto5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto5],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
