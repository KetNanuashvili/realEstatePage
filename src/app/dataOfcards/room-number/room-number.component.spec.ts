import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomNumberComponent } from './room-number.component';

describe('RoomNumberComponent', () => {
  let component: RoomNumberComponent;
  let fixture: ComponentFixture<RoomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
