import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersComponentComponent } from './farmers-component.component';

describe('FarmersComponentComponent', () => {
  let component: FarmersComponentComponent;
  let fixture: ComponentFixture<FarmersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
