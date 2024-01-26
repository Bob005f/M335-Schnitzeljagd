import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertigPage } from './fertig.page';

describe('FertigPage', () => {
  let component: FertigPage;
  let fixture: ComponentFixture<FertigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FertigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
