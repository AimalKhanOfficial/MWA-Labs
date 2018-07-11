import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChildComponentComponent } from './details-child-component.component';

describe('DetailsChildComponentComponent', () => {
  let component: DetailsChildComponentComponent;
  let fixture: ComponentFixture<DetailsChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
