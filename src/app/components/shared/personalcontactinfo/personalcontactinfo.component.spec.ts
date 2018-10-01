import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcontactinfoComponent } from './personalcontactinfo.component';

describe('PersonalcontactinfoComponent', () => {
  let component: PersonalcontactinfoComponent;
  let fixture: ComponentFixture<PersonalcontactinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalcontactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcontactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
