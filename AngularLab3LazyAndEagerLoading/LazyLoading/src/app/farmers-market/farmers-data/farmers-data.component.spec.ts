import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersDataComponent } from './farmers-data.component';

describe('FarmersDataComponent', () => {
  let component: FarmersDataComponent;
  let fixture: ComponentFixture<FarmersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
