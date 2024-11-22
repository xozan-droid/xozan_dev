import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEventosComponent } from './main-eventos.component';

describe('MainEventosComponent', () => {
  let component: MainEventosComponent;
  let fixture: ComponentFixture<MainEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
