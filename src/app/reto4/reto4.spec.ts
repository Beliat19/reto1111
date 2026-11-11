import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto4 } from './reto4';

describe('Reto4', () => {
  let component: Reto4;
  let fixture: ComponentFixture<Reto4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto4],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
