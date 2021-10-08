import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperfilComponent } from './aperfil.component';

describe('AperfilComponent', () => {
  let component: AperfilComponent;
  let fixture: ComponentFixture<AperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AperfilComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
