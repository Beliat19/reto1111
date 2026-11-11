import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto2 } from './reto2';

describe('Reto2', () => {
  let component: Reto2;
  let fixture: ComponentFixture<Reto2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto2],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
