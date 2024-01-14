import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsTableComponent } from './rockets-table.component';

describe('RocketsTableComponent', () => {
  let component: RocketsTableComponent;
  let fixture: ComponentFixture<RocketsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocketsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
