import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmbreEqpeProjetComponent } from './mmbre-eqpe-projet.component';

describe('MmbreEqpeProjetComponent', () => {
  let component: MmbreEqpeProjetComponent;
  let fixture: ComponentFixture<MmbreEqpeProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmbreEqpeProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmbreEqpeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
