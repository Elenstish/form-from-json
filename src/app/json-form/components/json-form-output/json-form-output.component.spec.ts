import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormOutputComponent } from './json-form-output.component';

describe('JsonFormOutputComponent', () => {
  let component: JsonFormOutputComponent;
  let fixture: ComponentFixture<JsonFormOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
