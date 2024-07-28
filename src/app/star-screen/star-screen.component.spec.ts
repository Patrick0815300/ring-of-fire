import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarScreenComponent } from './star-screen.component';

describe('StarScreenComponent', () => {
  let component: StarScreenComponent;
  let fixture: ComponentFixture<StarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
