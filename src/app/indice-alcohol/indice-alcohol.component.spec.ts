import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAlcoholComponent } from './indice-alcohol.component';

describe('IndiceAlcoholComponent', () => {
  let component: IndiceAlcoholComponent;
  let fixture: ComponentFixture<IndiceAlcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceAlcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
