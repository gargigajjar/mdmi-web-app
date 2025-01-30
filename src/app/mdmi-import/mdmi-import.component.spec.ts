import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdmiImportComponent } from './mdmi-import.component';

describe('MdmiImportComponent', () => {
  let component: MdmiImportComponent;
  let fixture: ComponentFixture<MdmiImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdmiImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdmiImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
