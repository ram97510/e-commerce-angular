import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccsViewComponent } from './accs-view.component';

describe('AccsViewComponent', () => {
  let component: AccsViewComponent;
  let fixture: ComponentFixture<AccsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
