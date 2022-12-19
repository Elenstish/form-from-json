import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormGroupComponent } from './json-form-group.component';

describe('JsonFormGroupComponent', () => {
  let component: JsonFormGroupComponent;
  let fixture: ComponentFixture<JsonFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
