import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingEnhancementComponent } from './mapping-enhancement.component';

describe('MappingEnhancementComponent', () => {
  let component: MappingEnhancementComponent;
  let fixture: ComponentFixture<MappingEnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MappingEnhancementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
