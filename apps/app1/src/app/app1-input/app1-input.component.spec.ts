import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1InputComponent } from './app1-input.component';

describe('App1InputComponent', () => {
  let component: App1InputComponent;
  let fixture: ComponentFixture<App1InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App1InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(App1InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
