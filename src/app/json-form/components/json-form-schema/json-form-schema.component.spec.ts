import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormSchemaComponent } from './json-form-schema.component';

describe('JsonFormSchemaComponent', () => {
  let component: JsonFormSchemaComponent;
  let fixture: ComponentFixture<JsonFormSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
