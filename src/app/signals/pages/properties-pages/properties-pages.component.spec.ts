import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPagesComponent } from './properties-pages.component';

describe('PropertiesPagesComponent', () => {
  let component: PropertiesPagesComponent;
  let fixture: ComponentFixture<PropertiesPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesPagesComponent]
    });
    fixture = TestBed.createComponent(PropertiesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
