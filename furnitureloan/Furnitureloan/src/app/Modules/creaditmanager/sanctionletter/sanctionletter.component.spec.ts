import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionletterComponent } from './sanctionletter.component';

describe('SanctionletterComponent', () => {
  let component: SanctionletterComponent;
  let fixture: ComponentFixture<SanctionletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
