import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProvidersComponent } from './details-providers.component';

describe('DetailsProvidersComponent', () => {
  let component: DetailsProvidersComponent;
  let fixture: ComponentFixture<DetailsProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
