import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainFooter } from './dashboard-main-footer';

describe('DashboardMainFooter', () => {
  let component: DashboardMainFooter;
  let fixture: ComponentFixture<DashboardMainFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMainFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMainFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
