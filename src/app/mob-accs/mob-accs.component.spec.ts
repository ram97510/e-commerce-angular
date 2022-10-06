import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAccsComponent } from './mob-accs.component';

describe('MobAccsComponent', () => {
  let component: MobAccsComponent;
  let fixture: ComponentFixture<MobAccsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobAccsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobAccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
