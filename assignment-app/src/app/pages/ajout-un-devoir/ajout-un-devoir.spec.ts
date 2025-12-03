import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUnDevoir } from './ajout-un-devoir';

describe('AjoutUnDevoir', () => {
  let component: AjoutUnDevoir;
  let fixture: ComponentFixture<AjoutUnDevoir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutUnDevoir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutUnDevoir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
