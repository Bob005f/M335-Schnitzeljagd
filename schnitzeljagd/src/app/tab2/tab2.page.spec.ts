import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1Page } from './tab2.page';

describe('Tab1Page', () => {
  let component: Task1Page;
  let fixture: ComponentFixture<Task1Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Task1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
