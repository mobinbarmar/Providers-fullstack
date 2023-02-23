import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProvidersComponent } from './delete-providers.component';

describe('DeleteProvidersComponent', () => {
  let component: DeleteProvidersComponent;
  let fixture: ComponentFixture<DeleteProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
