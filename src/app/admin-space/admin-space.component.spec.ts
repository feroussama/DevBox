import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceComponent } from './admin-space.component';

describe('AdminSpaceComponent', () => {
  let component: AdminSpaceComponent;
  let fixture: ComponentFixture<AdminSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
