import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcomprasComponent } from './hcompras.component';

describe('HcomprasComponent', () => {
  let component: HcomprasComponent;
  let fixture: ComponentFixture<HcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HcomprasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
