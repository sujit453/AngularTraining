import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloAComponent } from './hello-a.component';

describe('HelloAComponent', () => {
  let component: HelloAComponent;
  let fixture: ComponentFixture<HelloAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
